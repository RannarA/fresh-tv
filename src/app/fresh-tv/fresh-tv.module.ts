import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FreshTvComponent} from './fresh-tv/fresh-tv.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    // components
    FreshTvComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // services

  ],
  exports: [
    FreshTvComponent
  ]
})
export class FreshTvModule {}
