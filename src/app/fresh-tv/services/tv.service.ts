import { Injectable } from '@angular/core';
import {THE_MOVIE_DB_API_KEY} from '../constants/api-constants';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class TvService {

  // todo https://api.themoviedb.org/3/configuration?api_key=2fc71d7b66922bb219aacbc8f73d1425

  // todo better url management
  IMAGE_BASE_PATH = 'http://image.tmdb.org/t/p/';

  DISCOVER_SHOWS_URL = 'https://api.themoviedb.org/3/discover/tv?api_key=' + THE_MOVIE_DB_API_KEY +
    '&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false';

  SEARCH_SHOWS_URL = 'https://api.themoviedb.org/3/search/tv?api_key=' + THE_MOVIE_DB_API_KEY +
    '&language=en-US&query=';

  constructor(private http: HttpClient) { }

  getThumbnailBase() {
    return this.IMAGE_BASE_PATH + 'w185';
  }

  getTvShows() {
    return this.http.get(this.DISCOVER_SHOWS_URL).map(response => response['results']);
  }

  search(queries: Observable<string>) {
    return queries
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(query => this.searchShows(query));
  }

  searchShows(query) {
    return this.http.get(this.SEARCH_SHOWS_URL + query + '&page=1').map(response => response['results']);
  }


}
