import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {TokenService} from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith('/api/')) {
      const token = this.tokenService.getToken();
      if (token) {
        request = request.clone({
          setHeaders: {
            authorization: token
          }
        });
      }
    }

    return next.handle(request);
  }
}
