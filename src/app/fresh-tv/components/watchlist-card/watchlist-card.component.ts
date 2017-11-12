import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WatchlistService} from '../../services/watchlist.service';

@Component({
  selector: 'app-watchlist-card',
  templateUrl: './watchlist-card.component.html',
  styleUrls: ['./watchlist-card.component.sass']
})
export class WatchlistCardComponent implements OnInit {

  @Input() imageBase: string;
  @Input() showData: any;
  @Output() removeFromWatchList = new EventEmitter<number>();

  constructor() { }

  removeFromWatchlist(showId: number) {
    this.removeFromWatchList.emit(showId);
  }

  ngOnInit() {
  }

}
