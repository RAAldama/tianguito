import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:5000';
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };

  constructor(private http: HttpClient) { }

  registerUser(data:any){
    return this.http.post(`${this.url}/register`, data);
  }

  loginUser(data:any){
    return this.http.post(`${this.url}/login`, data).pipe( tap( (ans: any) => {
      localStorage.setItem('token', ans.result.accessToken.jwtToken);
    }))
  }

  validateToken(): boolean{
    if(!localStorage.getItem('token')){
      return false;
    }else{
      return true;
    }
  }

}
