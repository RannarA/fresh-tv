import { Component, OnInit } from '@angular/core';
import {WatchlistService} from '../../services/watchlist.service';
import {MovieDbService} from '../../services/movie-db.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.sass']
})
export class WatchlistComponent implements OnInit {

  tvShows = [];

  constructor(private watchlistService: WatchlistService, private movieDbService: MovieDbService) { }

  getThumbnailBase() {
    return this.movieDbService.getThumbnailBase();
  }

  removeFromWatchList(showId: number) {
    this.watchlistService.removeFromWatchlist(showId)
      .subscribe(result => {
        if (result['success']) {
          this.tvShows = _.filter(this.tvShows, show => show.id !== showId);
        }
      });
  }

  getWatchlist() {
    this.watchlistService.getWatchlist()
      .subscribe(tvShowData => {
        this.tvShows.push(tvShowData)
      });
  }

  ngOnInit() {
    this.getWatchlist();
  }

}
