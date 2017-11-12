import { Component, OnInit } from '@angular/core';
import {WatchlistService} from '../../services/watchlist.service';
import {MovieDbService} from '../../services/movie-db.service';

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
          // TODO there has to be better way
          this.tvShows = [];
          this.getWatchlist();
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
