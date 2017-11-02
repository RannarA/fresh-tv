import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-watchlist-card',
  templateUrl: './watchlist-card.component.html',
  styleUrls: ['./watchlist-card.component.sass']
})
export class WatchlistCardComponent implements OnInit {

  @Input() imageBase: string;
  @Input() showData: any;

  constructor() { }

  ngOnInit() {
  }

}
