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

  ngOnInit() {
    console.log('init watchlist');\
    this.watchlistService.getWatchlist()
      .subscribe(tvShowData => {
        this.tvShows.push(tvShowData)
      });
  }

}
