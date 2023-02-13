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
  public _imgList = ['happy','soso','good','excite','great','uneasy','sad','not_good','lonely','depressed','surprise','upset','unpleasant','idk','empty'];
  public _feelings = ['즐거워', '그냥 그래', '좋아!', '설레', '행복해', '불안해', '슬퍼', '별로야', '외로워', '우울해', '놀랐어', '화났어', '불쾌해', '모르겠어', '비워둘래'];
  private _today = new Date();
  private journalData = new Subject<object>();

  // eslint-disable-next-line @typescript-eslint/member-ordering
  getJournalData$ = this.journalData.asObservable();
  constructor( private modalCtrl: ModalController,
              private toastCtrl: ToastController,
              private calService: CalendarCreatorService,
              public http: HttpClient) {}

  get getImgList(): string[] {
    return this._imgList;
  }
  get getFeelings(): string[] {
    return this._feelings;
  }
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
  public getFeelingName(img: string): string {
    if (img === 'none') {
      return '비워둘래';
    }
    for (let i=0; i<this._imgList.length; i++) {
      if (this._imgList[i] === img.slice(1, img.length)) {
        return this._feelings[i];
      }
    }
  }
  public async createJournal(day: Day = this.getToday) {
    const data = {
      message: 'DayDiary',
      id_mail:'test@test.com',
      date: this.calService.getDateFormatted(day.date),
      // date: `${day.year}-${day.monthIndex < 9 ? '0'+String(day.monthIndex+1) : day.monthIndex+1}-${day.dayNumber < 10 ? '0'+String(day.dayNumber) : day.dayNumber}`
    };
    await this.http.post(`/api/DayDiary/`, data, {
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
              this.http.post(`/api/DiarySave/`, finalData, {
                headers: new HttpHeaders()
                  .set('Content-Type', 'application/json')
                })
                .toPromise()
                .then((response: any) => {

                    console.log('createJournal-2',response);
                    this.presentToast('감정 적립', day);
                    this.calService.getCurrentMonth(this.getToday.monthIndex, this.getToday.year);
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
        this.modalCtrl.create({
          component: CreateJournalComponent,
          componentProps: {day},
          cssClass: 'diaryModal',
        }).then (modalEl => {
          modalEl.present();
          return modalEl.onDidDismiss();
        }).then(result => {
          console.log(result);
        });
      });
  }


  public async presentToast(msg: string, day?: Day) {
    const dayStr = day ? `${day.year}년 ${day.monthIndex + 1}월 ${day.dayNumber}일의` : '';
    const toast = await this.toastCtrl.create({
      message: `
      <p class="ion-text-center">
      ${dayStr}
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
