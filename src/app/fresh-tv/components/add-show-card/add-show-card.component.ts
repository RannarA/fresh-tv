import {Component, Input, OnInit} from '@angular/core';
import {WatchlistService} from '../../services/watchlist.service';

@Component({
  selector: 'app-add-show-card',
  templateUrl: './add-show-card.component.html',
  styleUrls: ['./add-show-card.component.sass']
})
export class AddShowCardComponent implements OnInit {

  @Input() showData: any;
  @Input() imageBase: string;

  constructor(private watchlistService: WatchlistService) {}

  addToWatchlist(showId) {
    this.watchlistService.addToWatchlist(showId)
      .subscribe(response => console.log(response));
  }

  ngOnInit() {
  }

}
