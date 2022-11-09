import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { DatetimeChangeEventDetail, DatetimeCustomEvent, OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonModal) modal:IonModal;
  message = 'modal example';
  name: string;
  dateChanged(e: Event) {
    const ev = e as CustomEvent<DatetimeCustomEvent>;
    const detail = ev.detail as DatetimeChangeEventDetail;
    console.log(e);
    console.log(detail.value);
  }
  dateClick(e: Event) {
    console.log(e);
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}`;
    }
  }
  constructor() {}

}
