import { Component, OnInit } from '@angular/core';
import { mdTransitionAnimation, ModalController, PopoverController } from '@ionic/angular';
import { CalendarCreatorService } from '../../calendarCreator.service';
import { element } from 'protractor';
import { SetFeelingComponent } from './setFeeling/set-feeling.component';
import { RecordingComponent } from './recording/recording.component';

@Component({
  selector: 'app-create-journal',
  templateUrl: './create-journal.component.html',
  styleUrls: ['./create-journal.component.scss'],
})
export class CreateJournalComponent implements OnInit {
  public today = new Date();
  public year = 2022;
  public month: string;
  public dayNumber: 1;
  public feelings = ['happy', 'none', 'soso'];

  constructor(private modalCtrl: ModalController,
              private calendarService: CalendarCreatorService,
              public popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.month = this.calendarService.getMonthName(0);
  }
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  onJournalConfirm() {
    this.modalCtrl.dismiss(null, 'confirm');
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
  presentPopover(ev: any, i: number) {
    const target = ev.target as Element;
    this.popoverCtrl.create({
      component: SetFeelingComponent,
      componentProps: {time: i},
      cssClass: 'set-feeling-popover',
      event: ev,
      translucent: true,
      mode: 'md',
    }).then (popoverEl => {
      popoverEl.present();
      return popoverEl.onDidDismiss();
    }).then(result => {
      if (result.role === 'confirm') {
        this.feelings[result.data.time] = result.data.feeling;
      }
    });

    // const { role } = await popover.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }
}
