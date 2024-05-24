import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable, tap, throwError} from 'rxjs';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class VerifyTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();
    console.log('esta interceptando')

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        },
        (error: any) => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            this.router.navigate(['/auth/login']);
          }
        }
      )
    );
  }
}
