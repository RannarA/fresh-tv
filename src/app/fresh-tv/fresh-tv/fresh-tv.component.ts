import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-fresh-tv',
  templateUrl: './fresh-tv.component.html',
  styleUrls: ['./fresh-tv.component.sass']
})
export class FreshTvComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
  }
}
