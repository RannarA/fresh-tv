import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-fresh-tv',
  templateUrl: './fresh-tv.component.html',
  styleUrls: ['./fresh-tv.component.sass']
})
export class FreshTvComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const url = 'https://api.themoviedb.org/3/discover/tv?api_key=2fc71d7b66922bb219aacbc8f73d1425' +
      '&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false';

    this.http.get(url).subscribe(data => {
      console.log(data);
    })

  }

}
