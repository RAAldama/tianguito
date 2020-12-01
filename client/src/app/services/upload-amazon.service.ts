import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadAmazonService {

  url: string = 'http://localhost:5000';
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };

  constructor(private http: HttpClient) { 
    
  }

  getMarkets(){
    return this.http.get(`${this.url}/markets`, this.requestOptions);
  }

  registerUser(data:any){
    console.log(this.url)
    console.log(data)
    return this.http.post(`${this.url}/register`, data);
  }

  createMarket(data:any){
    return this.http.post(`${this.url}/markets`, data);
  }

  updateMarket(oldName:string, newName:string){
    return this.http.put(`${this.url}/markets`, {oldName:oldName,newName:newName});
  }

  getStands(){
    return this.http.get(`${this.url}/stand`, this.requestOptions);
  }

  createStand(data: any){
    console.log("La wea")
    return this.http.post(`${this.url}/stand`, data);
  }

  createOrder(data: any){
    return this.http.post(`${this.url}/orders`, data);
  }

  createProduct(data: any){
    return this.http.post(`${this.url}/product`, data);
  }
}
