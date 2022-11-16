import { Component, OnInit } from '@angular/core';
import { mdTransitionAnimation, ModalController, PopoverController } from '@ionic/angular';
import { CalendarCreatorService } from '../../calendarCreator.service';
import { RecordingComponent } from './recording/recording.component';
import { element } from 'protractor';

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
  async presentPopover(ev: any, i: number) {
    const target = ev.target as Element;
    const popover = await this.popoverCtrl.create({
      component: RecordingComponent,
      componentProps: {time: i},
      cssClass: 'recording-popover',
      event: ev,
      translucent: true,
      mode: 'md',
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
