import { Component, OnInit } from '@angular/core';
import {TvService} from '../../services/tv.service';

@Component({
  selector: 'app-discover-shows',
  templateUrl: './discover-shows.component.html',
  styleUrls: ['./discover-shows.component.sass']
})
export class DiscoverShowsComponent implements OnInit {
  tvShows: any;

  constructor(private tvService: TvService) { }


  getThumbnailBase() {
    return this.tvService.getThumbnailBase();
  }

  ngOnInit() {
    this.tvService.getTvShows()
      .subscribe(tvShows => this.tvShows = tvShows);
  }

}
