import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { user } from './model/user';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CheckuserService {

  url = "https://localhost:44374/api/UserLogginn";

  constructor(private sjekkHTTP : HttpClient) { 
  }

  post(data: user) : Observable<Object>{
 
    const sjekkdata = {
        "username": data.brukernavn,
        "password": data.passord
    }
    return this.sjekkHTTP.post(this.url,sjekkdata)
  }

  getToken() {
    return localStorage.getItem('token');
  }

  //sjekke interceptor
  public ping() {
    this.sjekkHTTP.get(this.url)
    .subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}
