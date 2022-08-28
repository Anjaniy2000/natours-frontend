import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  register(data:Register){
    let res=this.http.post('http://localhost:8083/api/auth/register',data);
    return res;
  }
}
