import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.sass']
})
export class TvShowsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init')
  }

}
