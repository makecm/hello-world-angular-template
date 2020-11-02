import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MakeTemplatePropsRef } from '../lib/MakeTemplatePropsRef';
import { ShapesComponent } from './shapes/shapes.component';
import { LogosComponent } from './logos/logos.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapesComponent,
    LogosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ MakeTemplatePropsRef ],
  bootstrap: [AppComponent]
})
export class AppModule { }
