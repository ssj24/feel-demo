import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { CreateJournalComponent } from '../tab2/create-journal/create-journal.component';
import { SetFeelingComponent } from '../tab2/create-journal/setFeeling/set-feeling.component';
import { RecordingComponent } from '../tab2/create-journal/recording/recording.component';

@NgModule({
  imports: [
IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
  ],
  declarations: [TabsPage, CreateJournalComponent, SetFeelingComponent, RecordingComponent],
  entryComponents: [CreateJournalComponent]
})
export class TabsPageModule {}
