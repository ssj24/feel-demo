import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateJournalComponent } from '../tab2/create-journal/create-journal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor( private modalCtrl: ModalController,
               private router: Router) {}

  onCreateJournal() {
    if(this.router.url !== '/tabs/tab2') {
      return this.router.navigateByUrl('/tabs/tab2');
    }
    this.modalCtrl.create({
      component: CreateJournalComponent,
      componentProps: {},
      cssClass: 'diaryModal',
    }).then (modalEl => {
      modalEl.present();
    }).then(result => {
      console.log(result);
    });
  }
}
