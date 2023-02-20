import { JournalCreatorService } from './../../../journal-creator.service';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit, AfterViewInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { ActionSheetController, ModalController, PopoverController, AlertController } from '@ionic/angular';
import { CalendarCreatorService } from '../../../calendarCreator.service';
import { SetFeelingComponent } from './setFeeling/set-feeling.component';
import { RecordingComponent } from './recording/recording.component';
import { AddKeywordComponent } from './add-keyword/add-keyword.component';
import { WritingComponent } from './writing/writing.component';
import { Diary } from 'src/app/diary.model';
import { Day } from 'src/app/day.model';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-create-journal',
  templateUrl: './create-journal.component.html',
  styleUrls: ['./create-journal.component.scss'],
})
export class CreateJournalComponent implements OnInit, AfterViewInit {
  @Input() day: Day;
  public year = 0;
  public month = '';
  public dayNumber =  1;
  public feelings = ['none', 'none', 'none'];
  public feelingList: string[];
  public feelNames = ['선택해주세요', '선택해주세요', '선택해주세요'];
  public summary = '';
  public diary: Diary[] = [];
  public keywords: string[] = [];
  public result: string;
  public checked: false;

  constructor(private journalCreator: JournalCreatorService,
              private modalCtrl: ModalController,
              private calendarService: CalendarCreatorService,
              private popoverCtrl: PopoverController,
              private actionSheetCtrl: ActionSheetController,
              private alertController: AlertController) {
                this.feelingList = this.journalCreator.getFeelings;
              }

  ngOnInit() {
    this.feelings = this.day.feelings.slice(); // copy not reference
    for (let i=0; i<this.feelings.length; i++) {
      this.feelNames[i] = this.journalCreator.getFeelingName(this.feelings[i]);
    }
    this.month = this.calendarService.getMonthName(this.day.monthIndex);
    this.summary = this.day.summary || '';
    this.diary = this.day.diary || null;
    this.keywords = this.day.keywords || [];
  }
  ngAfterViewInit() {
  }

  async alertDismiss(msg: string): Promise<string> {
    const alert = await this.alertController.create({
      header: msg,
      buttons: [
        {
          text: '취소',
          role: 'cancel',
        },
        {
          text: '확인',
          role: 'confirm',
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    return role;
  }
  async onCancel() {
    const confirm = await this.alertDismiss('저장하지 않고 나가시겠습니까?');
    if (confirm === 'confirm') {
      this.modalCtrl.dismiss(null, 'cancel');
    } else {
      console.log('canceled');
    }
  }

  async onJournalConfirm() {
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
        recording: this.day.recording,
        isShare: this.checked,
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
      console.log(result);
      const res = result.data;
      for (const i of res.sentence) {
        this.diary.push({time: i.start, sentence: i.sentence});
      };
      this.keywords.push(res.sentimental[0].senti);
      this.keywords = [...new Set(this.keywords)];
      if (this.keywords.length > 10) {
        this.journalCreator.presentToast('키워드는 최대 10개까지 설정할 수 있습니다.');
        this.keywords = [...this.keywords].slice(0, 10);
        console.log(this.keywords);
      }
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
  onSummaryFocus(e: Event) {
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
      reference: 'trigger',
      alignment: 'center',
      mode: 'md',
    }).then (popoverEl => {
      popoverEl.present();
      return popoverEl.onDidDismiss();
    }).then(result => {
      if (result.role === 'confirm') {
        console.log(result.data);
        this.feelings[result.data.time] = result.data.feeling;
        this.feelNames[result.data.time] = result.data.name;
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
      componentProps: {keywords: this.keywords},
      cssClass: 'add-keyword-popover',
      event: e,
      translucent: true,
      alignment: 'center',
      mode: 'md',
    }).then (popoverEl => {
      popoverEl.present();
      return popoverEl.onDidDismiss();
    }).then(result => {
      if (result.role === 'confirm') {
        console.log(this.keywords);
      }
      console.log(result);
    });

  }
  onBadgeClicked(keyword: string) {
    this.keywords = this.keywords.filter(x => x !== keyword);
  }
  onShare() {
    if (this.checked) {
      this.journalCreator.presentToast('오늘의 일기 전체 내용은 제외하고 공유돼요.');
    }
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
    this.onJournalConfirm();
  }
}
