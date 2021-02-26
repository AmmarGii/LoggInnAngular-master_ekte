import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private Injector : Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //testing
    console.log('Auth Interceptor')
    console.log(req.url);
    
    const authToken =  "My Token";
    const authReq = req.clone({
      setHeaders : { Authorization: authToken } 
    });
    return next.handle(authReq);

  }
}

//test
