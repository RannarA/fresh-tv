import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  private TOKEN_NAME = 'jwt_token';

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_NAME);
  }

}
