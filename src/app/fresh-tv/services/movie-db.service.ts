import { Injectable } from '@angular/core';
import {THE_MOVIE_DB_API_KEY} from '../constants/api-constants';
import 'rxjs/add/operator/map';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class MovieDbService {
  IMAGE_BASE_PATH = 'http://image.tmdb.org/t/p/';
  DISCOVER_BASE_PATH = 'https://api.themoviedb.org/3/discover/tv';
  SEARCH_BASE_PATH = 'https://api.themoviedb.org/3/search/tv';
  SEARCH_BY_ID_PATH = 'https://api.themoviedb.org/3/tv/';

  constructor(private http: HttpClient,
              private router: Router) { }

  getThumbnailBase() {
    return this.IMAGE_BASE_PATH + 'w185';
  }

  getTvShows() {
    const params = new HttpParams()
      .set('api_key', THE_MOVIE_DB_API_KEY)
      .set('language', 'en-US')
      .set('sort_by', 'popularity.desc')
      .set('page', '1')
      .set('timezone', 'America/New_York')
      .set('include_null_first_air_dates', 'false');

    return this.http.get(this.DISCOVER_BASE_PATH, {params: params})
      .map(response => response['results']);
  }

  getTvShowById(id) {
    const params = new HttpParams()
      .set('api_key', THE_MOVIE_DB_API_KEY)
      .set('language', 'en-US');

    return this.http.get(this.SEARCH_BY_ID_PATH + id, {params: params});
  }

  search(queries: Observable<string>) {
    return queries
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(query => this.searchShows(query));
  }

  searchShows(query) {
    if (!query) {
      this.router.navigate(['/search']);
      return this.getTvShows();
    }

    const params = new HttpParams()
      .set('api_key', THE_MOVIE_DB_API_KEY)
      .set('language', 'en-US')
      .set('page', '1')
      .set('query', query);

    return this.http.get(this.SEARCH_BASE_PATH, {params: params})
      .map(response => response['results']);
  }
}
