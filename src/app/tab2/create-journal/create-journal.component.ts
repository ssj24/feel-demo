import { Component, Input, OnInit } from '@angular/core';
import { mdTransitionAnimation, ModalController, PopoverController } from '@ionic/angular';
import { CalendarCreatorService } from '../../calendarCreator.service';
import { element } from 'protractor';
import { SetFeelingComponent } from './setFeeling/set-feeling.component';
import { RecordingComponent } from './recording/recording.component';
import { AddKeywordComponent } from './add-keyword/add-keyword.component';
import { Diary } from 'src/app/diary.model';
import { Day } from 'src/app/day.model';

@Component({
  selector: 'app-create-journal',
  templateUrl: './create-journal.component.html',
  styleUrls: ['./create-journal.component.scss'],
})
export class CreateJournalComponent implements OnInit {
  @Input() day: Day;
  public year = 0;
  public month = '';
  public dayNumber =  1;
  public feelings = ['none', 'none', 'none'];
  public aLine = '';
  public diary: Diary[] = [];
  public keywords: string[] = [];

  constructor(private modalCtrl: ModalController,
              private calendarService: CalendarCreatorService,
              public popoverCtrl: PopoverController) { }

  ngOnInit() {
    console.log(this.day);
    this.feelings = this.day.feelings.slice(); // copy not reference
    this.year = this.day.year;
    this.month = this.calendarService.getMonthName(this.day.monthIndex);
    this.dayNumber = this.day.dayNumber;
    this.aLine = 'summary of today diary.';
    this.diary = [
    {
      id: 1,
      time: new Date().getTime(),
      diary: 'this is what will gonna look like',
    },
    {
      id: 2,
      time: new Date().getTime(),
      diary: 'second line',
    },
    {
      id: 3,
      time: new Date().getTime(),
      diary: 'third line',
    },
    ];
    this.keywords = ['날씨', '걱정', '우울', '행복', '고독', '텀블러'];
  }
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  onJournalConfirm() {
    this.modalCtrl.dismiss({
      feelings: this.feelings,
      aLine: this.aLine,
      diary: this.diary,
      keywords: this.keywords
    }, 'confirm');
  }
  onRecording() {
    this.modalCtrl.create({
      component: RecordingComponent,
      cssClass: 'recordingModal dFlex',
      breakpoints: [0, 0.4, 0.7],
      initialBreakpoint: 0.4,
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(result => {
      console.log('result');
    });
  }
  onSetFeeling(e: Event, i: number) {
    this.popoverCtrl.create({
      component: SetFeelingComponent,
      componentProps: {time: i},
      cssClass: 'set-feeling-popover',
      event: e,
      translucent: true,
      mode: 'md',
    }).then (popoverEl => {
      popoverEl.present();
      return popoverEl.onDidDismiss();
    }).then(result => {
      if (result.role === 'confirm') {
        this.feelings[result.data.time] = result.data.feeling;
      } else {
        // 이모지가 아닌 바깥 쪽 클릭으로 닫으면 이모지 사라짐
        this.feelings[i] = 'none';
      }
    });

    // const { role } = await popover.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }
  onKeywordCreate(e: Event) {
    this.popoverCtrl.create({
      component: AddKeywordComponent,
      componentProps: {},
      cssClass: 'add-keyword-popover',
      event: e,
      translucent: true,
      mode: 'md',
    }).then (popoverEl => {
      popoverEl.present();
      return popoverEl.onDidDismiss();
    }).then(result => {
      if (result.role === 'confirm') {
        this.keywords.push(result.data);
      }
      console.log(result);
    });

  }
  onBadgeClicked(keyword: string) {
    this.keywords = this.keywords.filter(x => x !== keyword);
  }
}
