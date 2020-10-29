import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MakeTemplatePropsRef } from '../lib/MakeTemplatePropsRef';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ MakeTemplatePropsRef ],
  bootstrap: [AppComponent]
})
export class AppModule { }
