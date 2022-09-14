import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map ,tap} from 'rxjs/operators';
import { Register } from '../models/register.model';
import { LocalStorageService } from "ngx-webstorage";
import { Observable, throwError } from "rxjs";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient,private localStorage: LocalStorageService,private route:Router) {}
  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();
  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    email: this.getEmail(),
  };

  register(data: Register) {
    let res = this.http.post('http://localhost:8083/api/auth/register', data, {
      responseType: 'text',
    });
    return res;
  }
  login(loginRequestPayload: any): Observable<boolean> {
    return this.http
      .post<any>(
        "http://localhost:8083/api/auth/login",
        loginRequestPayload
      )
      .pipe(
        map((data) => {
          this.localStorage.store(
            "authenticationToken",
            data.authenticationToken
          );
          this.localStorage.store("email", data.email);
          this.localStorage.store("refreshToken", data.refreshToken);
          this.localStorage.store("expiresAt", data.expiresAt);

          this.loggedIn.emit(true);
         // this.username.emit(data.email);
          return true;
        })
      );
  }
  refreshToken() {
    return this.http
      .post<any>(
        "http://localhost:8083/api/auth/refresh/token",
        this.refreshTokenPayload
      )
      .pipe(
        tap((response) => {
          this.localStorage.clear("authenticationToken");
          this.localStorage.clear("expiresAt");

          this.localStorage.store(
            "authenticationToken",
            response.authenticationToken
          );
          this.localStorage.store("expiresAt", response.expiresAt);
        })
      );
  }
  getEmail() {
    return this.localStorage.retrieve("email");
  }
  getRefreshToken() {
    let data=this.localStorage.retrieve("refreshtoken");
    return data;
  }
  getJwtToken() {
    return this.localStorage.retrieve("authenticationtoken");
  }
  logout() {
     this.http
      .post(
        "http://localhost:8083/api/auth/logout",
        this.refreshTokenPayload,
        { responseType: "text" }
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.route.navigate(['/'])
        },
        (error) => {
          throwError(error);
        }
      );
    this.localStorage.clear("authenticationtoken");
   this.localStorage.clear("email");
    this.localStorage.clear("refreshtoken");
    this.localStorage.clear("expiresat");
  }
}
