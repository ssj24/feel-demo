import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateJournalComponent } from '../tab2/mine/create-journal/create-journal.component';
import { JournalCreatorService } from '../journal-creator.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor( private journalService: JournalCreatorService,
               private router: Router) {}

  onCreateJournal() {
    if(this.router.url !== '/tabs/tab2') {
      return this.router.navigateByUrl('/tabs/tab2');
    }
    this.journalService.createJournal();
  }
}
