/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule, } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Media } from '@awesome-cordova-plugins/media/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateJournalComponent } from './tab2/mine/create-journal/create-journal.component';
import { SetFeelingComponent } from './tab2/mine/create-journal/setFeeling/set-feeling.component';
import { RecordingComponent } from './tab2/mine/create-journal/recording/recording.component';
import { AddKeywordComponent } from './tab2/mine/create-journal/add-keyword/add-keyword.component';
import { JournalDismissedComponent } from './tab2/mine/create-journal/journal-dismissed/journal-dismissed.component';
import { WritingComponent } from './tab2/mine/create-journal/writing/writing.component';

@NgModule({
  declarations: [AppComponent, CreateJournalComponent, SetFeelingComponent, RecordingComponent, AddKeywordComponent, JournalDismissedComponent, WritingComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, HttpClientXsrfModule.withOptions({
    cookieName: 'feel-Xsrf-Cookie',
    headerName: 'feel-Xsrf-Header',
    }), IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Media],
  bootstrap: [AppComponent],
  entryComponents: [CreateJournalComponent]
})
export class AppModule {}
