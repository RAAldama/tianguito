import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';

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

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(data:any){
    return this.http.post(`${this.url}/register`, data);
  }

  loginUser(data:any){
    return this.http.post(`${this.url}/login`, data).pipe( tap( (ans: any) => {
      localStorage.setItem('token', ans.result.accessToken.jwtToken);
    }), catchError(err => of(`Error en ${err}`)))
  }

  validateToken(): boolean{
    if(!localStorage.getItem('token')){
      return false;
    }else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/register');
  }

}
