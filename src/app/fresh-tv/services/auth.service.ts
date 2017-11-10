import { Injectable } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Injectable()
export class AuthService {

  private TOKEN_NAME = 'jwt_token';

  constructor(private router: Router,
              private http: HttpClient) {}

  signIn(user: User) {
    console.log(user)
    return this.http.post('/api/authenticate', user);
  }

  signOut() {
    localStorage.removeItem(this.TOKEN_NAME);
    this.router.navigate(['/discover']);
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_NAME, token)
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    // this is from angular2_jwt
    // TODO replace with something lighter
    return tokenNotExpired(null, token);
  }



}
