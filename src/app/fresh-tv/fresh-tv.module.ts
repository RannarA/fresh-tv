import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FreshTvComponent} from './fresh-tv/fresh-tv.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatInputModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MovieDbService} from './services/movie-db.service';
import { TvShowGridComponent } from './components/tv-show-grid/tv-show-grid.component';
import {RouterModule, Routes} from '@angular/router';
import { TvShowsComponent } from './containers/tv-shows/tv-shows.component';
import { DiscoverShowsComponent } from './containers/discover-shows/discover-shows.component';
import { SearchShowsComponent } from './containers/search-shows/search-shows.component';
import {WatchlistService} from './services/watchlist.service';
import { WatchlistComponent } from './containers/watchlist/watchlist.component';
import { WatchlistCardComponent } from './components/watchlist-card/watchlist-card.component';
import { AddShowCardComponent } from './components/add-show-card/add-show-card.component';
import {AuthService} from './services/auth.service';
import {TokenInterceptor} from './auth/token.interceptor';

const appRoutes: Routes = [
  { path: '', component: WatchlistComponent },
  { path: 'search', component: SearchShowsComponent },
  { path: 'discover', component: DiscoverShowsComponent },
];

@NgModule({
  declarations: [
    // components
    FreshTvComponent,
    ToolbarComponent,
    TvShowGridComponent,
    TvShowsComponent,
    DiscoverShowsComponent,
    SearchShowsComponent,
    WatchlistComponent,
    WatchlistCardComponent,
    AddShowCardComponent
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
    MatIconModule,
  ],
  providers: [
    // services
    AuthService,
    MovieDbService,
    WatchlistService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports: [
    FreshTvComponent
  ]
})
export class FreshTvModule {}
