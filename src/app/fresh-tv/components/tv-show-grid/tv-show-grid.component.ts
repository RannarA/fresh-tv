import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/concat';

@Component({
  selector: 'app-tv-show-grid',
  templateUrl: './tv-show-grid.component.html',
  styleUrls: ['./tv-show-grid.component.sass']
})
export class TvShowGridComponent implements OnInit {

  @Input() tvShows: any;
  @Input() imageBase: string;

  constructor() { }

  ngOnInit() {
  }

}
