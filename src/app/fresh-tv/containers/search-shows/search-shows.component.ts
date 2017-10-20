import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {TvService} from '../../services/tv.service';

@Component({
  selector: 'app-search-shows',
  templateUrl: './search-shows.component.html',
  styleUrls: ['./search-shows.component.sass']
})
export class SearchShowsComponent implements OnInit {

  searchQuery = new Subject<string>();
  tvShows: any;

  constructor(private route: ActivatedRoute, private tvService: TvService, private router: Router) { }

  getThumbnailBase() {
    return this.tvService.getThumbnailBase();
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(queryParams => {
        if (!queryParams.query) {
          this.router.navigate(['']);
        } else {
          this.searchQuery.next(queryParams.query)
        }
      });

    this.tvService.search(this.searchQuery)
      .subscribe(searchResults => this.tvShows = searchResults);
  }

}
