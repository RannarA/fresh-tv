import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ErrorHandler, NgModule} from '@angular/core';
import {FreshTvComponent} from './fresh-tv/fresh-tv.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MovieDbService} from './services/movie-db.service';
import {RouterModule, Routes} from '@angular/router';
import { TvShowsComponent } from './containers/tv-shows/tv-shows.component';
import { SearchShowsComponent } from './containers/search-shows/search-shows.component';
import {WatchlistService} from './services/watchlist.service';
import { WatchlistComponent } from './containers/watchlist/watchlist.component';
import { WatchlistCardComponent } from './components/watchlist-card/watchlist-card.component';
import { AddShowCardComponent } from './components/add-show-card/add-show-card.component';
import {AuthService} from './services/auth.service';
import {TokenInterceptor} from './auth/token.interceptor';
import {AuthGuardService} from './auth/auth-guard.service';
import { AuthenticationComponent } from './containers/authentication/authentication.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import {AuthErrorHandlerService} from './handler/auth-error-handler.service';
import {TokenService} from './services/token.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'authenticate', component: AuthenticationComponent },
  { path: 'watchlist', component: WatchlistComponent, canActivate: [AuthGuardService] },
  { path: 'search', component: SearchShowsComponent },
];

@NgModule({
  declarations: [
    // components
    FreshTvComponent,
    ToolbarComponent,
    TvShowsComponent,
    SearchShowsComponent,
    WatchlistComponent,
    WatchlistCardComponent,
    AddShowCardComponent,
    AuthenticationComponent,
    SignInFormComponent
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
    MatFormFieldModule
  ],
  providers: [
    // services
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: AuthErrorHandlerService
    },
    AuthService,
    MovieDbService,
    WatchlistService,
    AuthGuardService,
    TokenService
  ],
  exports: [
    FreshTvComponent
  ]
})
export class FreshTvModule {}
