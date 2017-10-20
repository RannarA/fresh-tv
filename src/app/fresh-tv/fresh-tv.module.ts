import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FreshTvComponent} from './fresh-tv/fresh-tv.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatInputModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {TvService} from './services/tv.service';
import { TvShowGridComponent } from './components/tv-show-grid/tv-show-grid.component';
import {RouterModule, Routes} from '@angular/router';
import { TvShowsComponent } from './containers/tv-shows/tv-shows.component';
import { DiscoverShowsComponent } from './containers/discover-shows/discover-shows.component';
import { SearchShowsComponent } from './containers/search-shows/search-shows.component';

const appRoutes: Routes = [
  { path: '', component: DiscoverShowsComponent },
  { path: 'search', component: SearchShowsComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    // components
    FreshTvComponent,
    ToolbarComponent,
    TvShowGridComponent,
    TvShowsComponent,
    DiscoverShowsComponent,
    SearchShowsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [
    // services
    TvService
  ],
  exports: [
    FreshTvComponent
  ]
})
export class FreshTvModule {}
