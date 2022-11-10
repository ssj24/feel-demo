/* eslint-disable max-len */
import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { DatetimeChangeEventDetail, DatetimeCustomEvent, OverlayEventDetail } from '@ionic/core';
import { element } from 'protractor';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonModal) modal: IonModal;
  message = 'modal example';
  name: string;
  selectedDate: string | string[] = '';
  shadowDom: any;
  constructor() {
  }
  changeDateImg() {
    const activeDate = this.shadowDom.querySelector('.calendar-day-active') as HTMLElement;
    activeDate.style.backgroundImage = `url('/assets/feeling/soso.svg'), url('/assets/feeling/surprise.svg'), url('/assets/feeling/sad.svg')`;
    activeDate.style.backgroundPosition = `center top, left bottom, right bottom`;
    activeDate.style.backgroundRepeat = `no-repeat, no-repeat, no-repeat`;
    activeDate.style.backgroundSize = `55% 55%, 55% 55%, 55% 55%`;
    activeDate.style.color = `transparent`;
  }
  dateChanged(e: Event) {
    const ev = e as CustomEvent<DatetimeCustomEvent>;
    const detail = ev.detail as DatetimeChangeEventDetail;
    console.log(ev);
    this.selectedDate = detail.value;
    console.log(e.target);
    this.shadowDom = document.querySelector('ion-datetime').shadowRoot;
    this.changeDateImg();
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


}
