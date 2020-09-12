import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '@app/_services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService, private route: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        if (this.authenticationService.currentUserValue) {//user was logged in
          this.authenticationService.logout();
          location.reload();
        }
        this.route.navigate(["/login"], { queryParams: { returnUrl: location.pathname } });
      }
      return throwError(err);
    }));
  }
}
