import { Injectable } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {TokenService} from './token.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private router: Router,
              private tokenService: TokenService, private http: HttpClient) {}

  signIn(user: User) {
    return this.http.post('/api/authenticate', user);
  }

  signOut() {
    this.tokenService.removeToken();
    this.router.navigate(['/search']);
  }

  isAuthenticated(): boolean {
    const token = this.tokenService.getToken();

    // this is from angular2_jwt
    // TODO replace with something lighter
    return tokenNotExpired(null, token);
  }



}
