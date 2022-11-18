/* eslint-disable no-underscore-dangle */
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateJournalComponent } from './tab2/create-journal/create-journal.component';
import { Day } from './day.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JournalCreatorService {
  private _today = new Date();
  private journalData = new Subject<object>();

  // eslint-disable-next-line @typescript-eslint/member-ordering
  getJournalData$ = this.journalData.asObservable();
  constructor( private modalCtrl: ModalController) {}
  get getToday(): Day {
    return {
      year: this._today.getFullYear(),
      monthIndex: this._today.getMonth(),
      weekDayNumber: 0,
      dayNumber: this._today.getDate(),
      feelings: ['none', 'none', 'none']
    };
  }
  public createJournal(day: Day = this.getToday) {
    this.modalCtrl.create({
      component: CreateJournalComponent,
      componentProps: {day},
      cssClass: 'diaryModal',
    }).then (modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(result => {
      if (result.role === 'confirm') {
        this.journalData.next({data: result.data, day});
      } else {
        console.log(result);
      }
    });
}
}
