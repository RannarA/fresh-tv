import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/concat';
import {WatchlistService} from "../../services/watchlist.service";

@Component({
  selector: 'app-tv-show-grid',
  templateUrl: './tv-show-grid.component.html',
  styleUrls: ['./tv-show-grid.component.sass']
})
export class TvShowGridComponent implements OnInit {

  @Input() tvShows: any;
  @Input() imageBase: string;
  @Input() isWatchlist: boolean;

  constructor() { }

  ngOnInit() {
  }

}
