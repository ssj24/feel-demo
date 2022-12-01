import { CalendarCreatorService } from './calendarCreator.service';
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { CreateJournalComponent } from './tab2/mine/create-journal/create-journal.component';
import { Day } from './day.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class JournalCreatorService {
  private _today = new Date();
  private journalData = new Subject<object>();

  // eslint-disable-next-line @typescript-eslint/member-ordering
  getJournalData$ = this.journalData.asObservable();
  constructor( private modalCtrl: ModalController,
              private toastCtrl: ToastController,
              private calService: CalendarCreatorService,
              public http: HttpClient) {}
  get getToday(): Day {
    return {
      date: this._today,
      year: this._today.getFullYear(),
      monthIndex: this._today.getMonth(),
      weekDayNumber: 0,
      dayNumber: this._today.getDate(),
      // 이미 오늘 일기가 있으면 그걸 가져와야 되지 않을까?
      feelings: ['none', 'none', 'none'],
      summary: '',
      diary: [
          {
              time: 0,
              sentence: 'aaa'
          }
      ],
      keywords: [],
      recording: {},
    };
  }
  // public createJournal(day: Day = this.getToday) {
  //   this.modalCtrl.create({
  //               component: CreateJournalComponent,
  //               componentProps: {day},
  //               cssClass: 'diaryModal',
  //             }).then (modalEl => {
  //               modalEl.present();
  //               return modalEl.onDidDismiss();
  //             }).then(result => {
  //               if (result.role === 'confirm') {
  //                 this.journalData.next(result.data);
  //                 const finalData = {
  //                   message: 'DiarySave',
  //                   id_mail: 'test@test.com',
  //                   feelings: result.data.feelings,
  //                   summary: result.data.summary,
  //                   diary: result.data.diary,
  //                   keywords: result.data.keywords
  //                 };
  //                 console.log('finalData feelings', finalData.feelings);
  // }});
  // }
  public async createJournal(day: Day = this.getToday) {
    const data = {
      message: 'DayDiary',
      id_mail:'test@test.com',
      date: this.calService.getDateFormatted(day.date),
      // date: `${day.year}-${day.monthIndex < 9 ? '0'+String(day.monthIndex+1) : day.monthIndex+1}-${day.dayNumber < 10 ? '0'+String(day.dayNumber) : day.dayNumber}`
    };
    await this.http.post(`http://118.67.132.111:8000/DayDiary/`, data, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      })
      .toPromise()
      .then((res: any) => {
          console.log('createJournal-1',res);
          if (res !== 'DataNotExist') {
            day.feelings = JSON.parse(res.feelings.replace(/'/g, '"'));
            day.summary = res.summary;
            day.diary = JSON.parse(res.diary.replace(/'/g, '"'));
            day.keywords = JSON.parse(res.keywords.replace(/'/g, '"'));
          } else {
            day.summary = '';
            day.diary = [];
            day.keywords = [];
          }
          this.modalCtrl.create({
            component: CreateJournalComponent,
            componentProps: {day},
            cssClass: 'diaryModal',
          }).then (modalEl => {
            modalEl.present();
            return modalEl.onDidDismiss();
          }).then(result => {
            if (result.role === 'confirm') {
              this.journalData.next(result.data);
              const finalData = {
                message: 'DiarySave',
                id_mail: 'test@test.com',
                date: this.calService.getDateFormatted(result.data.date),
                feelings: result.data.feelings,
                summary: result.data.summary,
                diary: result.data.diary,
                keywords: result.data.keywords
              };
              console.log(finalData);
              console.log('finalData feelings', finalData.feelings);
              this.http.post(`http://118.67.132.111:8000/DiarySave/`, finalData, {
                headers: new HttpHeaders()
                  .set('Content-Type', 'application/json')
                })
                .toPromise()
                .then((response: any) => {

                    console.log('createJournal-2',response);
                    this.presentToast('감정 적립', day);

                })
                .catch(err => {
                  this.presentToast('감정 적립 실패');

                  console.log(err);

                });
            } else {
              console.log(result);
          }
          });
      })
      .catch(err => {
        console.log(err);
      });
  }


  public async presentToast(msg: string, day?: Day) {
    const toast = await this.toastCtrl.create({
      message: `
      <p class="ion-text-center">
      ${day.year}년 ${day.monthIndex + 1}월 ${day.dayNumber}일의
      ${msg}
      </p>
      `,
      duration: 2000,
      cssClass: 'journalToast'
    });

    await toast.present();

    const { role } = await toast.onDidDismiss();
    // this.roleMessage = `Dismissed with role: ${role}`;
  }
}
