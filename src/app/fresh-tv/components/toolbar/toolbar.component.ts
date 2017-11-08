import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router,
              private authService: AuthService) { }

  search(queryText) {
    this.router.navigate(['/search'], {
      queryParams: {query: queryText},
    })
  }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
