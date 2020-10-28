import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadAmazonService {

  url: string = 'https://localhost:5000';

  constructor(private http: HttpClient) { }

  getMarkets(){
    return this.http.get(`${this.url}/markets`);
  }

  createMarket(data:any){
    return this.http.post(`${this.url}/markets`, data);
  }

  updateMarket(oldName:string, newName:string){
    return this.http.put(`${this.url}/markets`, {oldName:oldName,newName:newName});
  }

  getStands(){
    return this.http.get(`${this.url}/stand`);
  }

  createStand(data: any){
    console.log("La wea")
    return this.http.post(`${this.url}/stand`, data);
  }

  createProduct(data: any){
    return this.http.post(`${this.url}/product`, data);
  }
}
