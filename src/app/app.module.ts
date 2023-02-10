import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CombinationLock } from './combination-lock/combination-lock.component';

@NgModule({
  declarations: [
    AppComponent,
    CombinationLock
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
