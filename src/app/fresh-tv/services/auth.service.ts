import { Injectable } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

declare let Auth0Lock: any;

@Injectable()
export class AuthService {

  lock = new Auth0Lock('0qe3K92GFPuWTOIztKq30OwXgeif5JlH', 'rannara.eu.auth0.com');

  constructor() { }

  login() {
    this.lock.show((error: string, profile: Object, id_token: string) => {
      if (error) {
        console.log(error);
      }
      // We get a profile object for the user from Auth0
      localStorage.setItem('profile', JSON.stringify(profile));
      // We also get the user's JWT
      localStorage.setItem('id_token', id_token);
    });
  }

  logout() {
    // To log out, we just need to remove
    // the user's profile and token
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  getToken(): string {
    return localStorage.getItem('id_token');
  }

  isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }

}
