import { Component, Input, OnInit, AfterViewInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { ActionSheetController, IonTextarea, mdTransitionAnimation, ModalController, PopoverController } from '@ionic/angular';
import { CalendarCreatorService } from '../../../calendarCreator.service';
import { element } from 'protractor';
import { SetFeelingComponent } from './setFeeling/set-feeling.component';
import { RecordingComponent } from './recording/recording.component';
import { AddKeywordComponent } from './add-keyword/add-keyword.component';
import { Diary } from 'src/app/diary.model';
import { Day } from 'src/app/day.model';
import { WritingComponent } from './writing/writing.component';

@Component({
  selector: 'app-create-journal',
  templateUrl: './create-journal.component.html',
  styleUrls: ['./create-journal.component.scss'],
})
export class CreateJournalComponent implements OnInit, AfterViewInit {
  @ViewChild('diaryTextarea') diaryTextarea: IonTextarea;
  @Input() day: Day;
  public year = 0;
  public month = '';
  public dayNumber =  1;
  public feelings = ['none', 'none', 'none'];
  public summary = '';
  public diary: Diary[] = [];
  public keywords: string[] = [];
  public isWrite = false;
  public result: string;

  constructor(private modalCtrl: ModalController,
              private calendarService: CalendarCreatorService,
              public popoverCtrl: PopoverController,
              private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    console.log(this.day);
    this.feelings = this.day.feelings.slice(); // copy not reference
    this.month = this.calendarService.getMonthName(this.day.monthIndex);
    this.summary = this.day.summary || '';
    this.diary = this.day.diary || null;
    this.keywords = this.day.keywords || [];
  }
  ngAfterViewInit() {

  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onJournalConfirm() {
    this.modalCtrl.dismiss({
      date: this.day.date,
      dayNumber: this.day.dayNumber,
      year: this.day.year,
      monthIndex: this.day.monthIndex,
      weekDayNumber: this.day.weekDayNumber,
      feelings: this.feelings,
      summary: this.summary,
      diary: this.diary,
      keywords: this.keywords,
      recording: this.day.recording
    }, 'confirm');
  }

  onRecording() {
    this.modalCtrl.create({
      component: RecordingComponent,
      cssClass: 'recordingModal dFlex',
      breakpoints: [0, 0.5, 0.7],
      initialBreakpoint: 0.5,
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(result => {
      console.log('result');
    });
  }
  onSentDelete(sent) {
    this.diary = this.diary.filter(x => x !== sent);
  }
  writeDiary() {
    this.modalCtrl.create({
      component: WritingComponent,
      componentProps: {diary: this.diary},
      cssClass: 'writingModal dFlex',
      breakpoints: [0, 0.5, 0.9],
      initialBreakpoint: 0.5,
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(result => {
      if (result.role === 'confirm') {
        this.diary.push({
          time: 0,
          sentence: result.data
        });
      }
    });
  }
  onSummaryFocus(e: CustomEvent) {
  //   (e.target as HTMLElement).style.border='#E2DEFF';
  //   (e.target as HTMLElement).style.borderRadius='10px';
  }

  onSetFeeling(e: Event, i: number) {
    let realTarget = e.target;
    if(!(e.target as Element).classList.contains('timeCard')) {
      realTarget = (e.target as Element).closest('.timeCard');
    };
    this.popoverCtrl.create({
      component: SetFeelingComponent,
      componentProps: {time: i},
      cssClass: 'set-feeling-popover',
      event: e,
      translucent: true,
      trigger: `timeCard${i}`,
      triggerAction: 'hover',
      mode: 'md',
    }).then (popoverEl => {
      popoverEl.present();
      return popoverEl.onDidDismiss();
    }).then(result => {
      if (result.role === 'confirm') {
        this.feelings[result.data.time] = result.data.feeling;
      } else {
        // 이모지가 아닌 바깥 쪽 클릭으로 닫으면 이모지 사라짐
        // this.feelings[i] = 'none';
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
        console.log(this.keywords);
        this.keywords.push(result.data);
        console.log(this.keywords);
      }
      console.log(result);
    });

  }
  onBadgeClicked(keyword: string) {
    this.keywords = this.keywords.filter(x => x !== keyword);
  }
  onChkClicked(e: Event) {
    console.log((e.target as HTMLIonCheckboxElement).checked);
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: `${this.day.year}/${this.month}/${this.day.dayNumber}의 일기를 삭제하시겠습니까?`,
      // subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
      mode: 'ios'
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    if (result.role === 'destructive') {
      this.deleteDiary();
    }
  }
  deleteDiary() {
    this.feelings = ['none', 'none', 'none'];
    this.diary = [];
    this.keywords = [];
    this.summary = '';
    this.day.feelings = ['none', 'none', 'none'];
    this.day.summary = '';
    this.day.diary = [];
    this.day.keywords = [];
    this.day.recording = {};
  }
}
