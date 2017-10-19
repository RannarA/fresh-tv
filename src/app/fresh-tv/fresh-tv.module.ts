import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FreshTvComponent} from './fresh-tv/fresh-tv.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    // components
    FreshTvComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    // services

  ],
  exports: [
    FreshTvComponent
  ]
})
export class FreshTvModule {}
