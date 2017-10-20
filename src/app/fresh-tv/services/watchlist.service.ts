import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import {MovieDbService} from './movie-db.service';

@Injectable()
export class WatchlistService {

  tmpList = [1412, 1418];

  constructor(private movieDbService: MovieDbService) { }

  addToWatchlist(id: number) {
    this.tmpList.push(id);
  }

  getWatchlist() {
    return Observable.of(this.tmpList)
      .mergeMap(data => data)
      .mergeMap(showId => this.movieDbService.getTvShowById(showId));
  }

}
