import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { MineComponent } from './mine/mine.component';
import { ExploreComponent } from './explore/explore.component';
import { CalendarListComponent } from './mine/calendar-list/calendar-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [Tab2Page, MineComponent, CalendarListComponent, ExploreComponent],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        Tab2PageRoutingModule,
    ]
})
export class Tab2PageModule {}
