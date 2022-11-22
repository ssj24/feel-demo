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
      aLine: '',
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
  public createJournal(day: Day = this.getToday) {
    const data = {
      message: 'DayDiary',
      id_mail:'test@test.com',
      date: `${day.year}-${day.monthIndex+1}-${day.dayNumber}`
    };
    this.http.post('http://192.168.31.35:8000/DayDiary/', data, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      })
      .toPromise()
      .then((res: any) => {

          console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
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
        const data = {
          message: 'DiarySave',
          DiarySave: {
            id_mail: 'test@test.com',
            date: result.data.date,
            feelings: result.data.feelings,
            summary: result.data.aLine,
            diary: result.data.diary,
            keywords: result.data.keywords
          }
        };
        console.log(data);
        // this.http.post('https://192.168.31.35/feeling', {data}, {
        //   headers: new HttpHeaders()
        //     .set('Content-Type', 'application/json')
        //   })
        //   .toPromise()
        //   .then((res: any) => {

        //       console.log(res);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
      } else {
        console.log(result);
      }
    });
}
}
