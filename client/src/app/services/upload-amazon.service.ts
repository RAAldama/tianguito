import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadAmazonService {

  url: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getMarkets(){
    return this.http.get(`${this.url}/markets`);
  }

  getUser(){
    return this.http.get(`${this.url}/user`);
  }

  createUser(data: any){
    return this.http.post(`${this.url}/createUser`, data);
  }

  createProduct(data: any){
    return this.http.post(`${this.url}/uploadProducts`, data);
  }
}
