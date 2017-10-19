import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FreshTvModule} from './fresh-tv/fresh-tv.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FreshTvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
