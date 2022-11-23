import { CalendarCreatorService } from './calendarCreator.service';
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateJournalComponent } from './tab2/create-journal/create-journal.component';
import { Day } from './day.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JournalCreatorService {
  private _today = new Date();
  private journalData = new Subject<object>();

  // eslint-disable-next-line @typescript-eslint/member-ordering
  getJournalData$ = this.journalData.asObservable();
  constructor( private modalCtrl: ModalController,
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
  public async createJournal(day: Day = this.getToday) {
    const data = {
      message: 'DayDiary',
      id_mail:'test@test.com',
      date: `${day.year}-${day.monthIndex+1}-${day.dayNumber < 10 ? '0'+day.dayNumber : day.dayNumber}`
    };
    await this.http.post(`/api/DayDiary/`, data, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      })
      .toPromise()
      .then((res: any) => {
          console.log('createJournal-1',res);
          day.summary = res.summary;
          day.diary = JSON.parse(res.diary.replace(/'/g, '"'));
          day.keywords = JSON.parse(res.keywords.replace(/'/g, '"'));
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
                date: result.data.date,
                feelings: result.data.feelings,
                summary: result.data.summary,
                diary: result.data.diary,
                keywords: result.data.keywords
              };
              console.log(finalData);
              this.http.post(`/api/DiarySave/`, finalData, {
                headers: new HttpHeaders()
                  .set('Content-Type', 'application/json')
                })
                .toPromise()
                .then((response: any) => {

                    console.log('createJournal-2',response);
                })
                .catch(err => {
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
}
