import { Component, OnInit } from '@angular/core';
import {MovieDbService} from '../../services/movie-db.service';

@Component({
  selector: 'app-discover-shows',
  templateUrl: './discover-shows.component.html',
  styleUrls: ['./discover-shows.component.sass']
})
export class DiscoverShowsComponent implements OnInit {
  tvShows: any;

  constructor(private movieDbService: MovieDbService) { }


  getThumbnailBase() {
    return this.movieDbService.getThumbnailBase();
  }

  ngOnInit() {
    this.movieDbService.getTvShows()
      .subscribe(tvShows => this.tvShows = tvShows);
  }

}
