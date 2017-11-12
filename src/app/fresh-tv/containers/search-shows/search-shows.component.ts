import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {MovieDbService} from '../../services/movie-db.service';

@Component({
  selector: 'app-search-shows',
  templateUrl: './search-shows.component.html',
  styleUrls: ['./search-shows.component.sass']
})
export class SearchShowsComponent implements OnInit {

  searchQuery = new Subject<string>();
  tvShows: any;

  constructor(private route: ActivatedRoute, private movieDbService: MovieDbService) { }

  getThumbnailBase() {
    return this.movieDbService.getThumbnailBase();
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(queryParams => this.searchQuery.next(queryParams.query));

    this.movieDbService.search(this.searchQuery)
      .subscribe(searchResults => this.tvShows = searchResults);

    this.movieDbService.getTvShows()
      .subscribe(tvShows => this.tvShows = tvShows);
  }

}
