import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parameter1Component } from './parameter1/parameter1.component';
import { Parameter2Component } from './parameter2/parameter2.component';

@NgModule({
  declarations: [
    AppComponent,
    Parameter1Component,
    Parameter2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
