import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EncriptacionComponent } from './encriptacion/encriptacion.component';
import {GeneralService} from './general.service' 
@NgModule({
  declarations: [
    AppComponent,
    EncriptacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }

