import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailViewComponent } from './mail-view/mail-view.component';
import { MailListComponent } from './mail-list/mail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MailViewComponent,
    MailListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
