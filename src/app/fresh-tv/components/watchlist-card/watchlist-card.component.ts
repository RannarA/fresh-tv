import {Component, Input, OnInit} from '@angular/core';
import {WatchlistService} from '../../services/watchlist.service';

@Component({
  selector: 'app-watchlist-card',
  templateUrl: './watchlist-card.component.html',
  styleUrls: ['./watchlist-card.component.sass']
})
export class WatchlistCardComponent implements OnInit {

  @Input() imageBase: string;
  @Input() showData: any;

  constructor(private watchlistService: WatchlistService) { }

  removeFromWatchlist(showId: number) {
    this.watchlistService.removeFromWatchlist(showId)
      .subscribe(response => console.log(response));
  }

  ngOnInit() {
  }

}
