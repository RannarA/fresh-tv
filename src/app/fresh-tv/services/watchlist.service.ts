import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';
import {MovieDbService} from './movie-db.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WatchlistService {

  constructor(private http: HttpClient,
              private movieDbService: MovieDbService) { }

  addToWatchlist(id: number) {
    const data = {
      showId: id
    };

    return this.http.post('/api/watchlist', data);
  }

  removeFromWatchlist(showId: number) {
    return this.http.delete('/api/watchlist/' + showId)
  }

  getWatchlist() {
    return this.http.get('/api/watchlist')
      .mergeMap((favouritesArray: any) => favouritesArray)
      .map(favourite => favourite['showId'])
      .mergeMap(showId => this.movieDbService.getTvShowById(showId))
  }
}
