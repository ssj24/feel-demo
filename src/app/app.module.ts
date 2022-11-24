/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Media } from '@awesome-cordova-plugins/media/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateJournalComponent } from './tab2/create-journal/create-journal.component';
import { SetFeelingComponent } from './tab2/create-journal/setFeeling/set-feeling.component';
import { RecordingComponent } from './tab2/create-journal/recording/recording.component';
import { AddKeywordComponent } from './tab2/create-journal/add-keyword/add-keyword.component';
import { JournalDismissedComponent } from './tab2/create-journal/journal-dismissed/journal-dismissed.component';

@NgModule({
  declarations: [AppComponent, CreateJournalComponent, SetFeelingComponent, RecordingComponent, AddKeywordComponent, JournalDismissedComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Media],
  bootstrap: [AppComponent],
  entryComponents: [CreateJournalComponent]
})
export class AppModule {}
