import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadAmazonService } from '../../services/upload-amazon.service';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.page.html',
  styleUrls: ['./vendor-register.page.scss'],
})
export class VendorRegisterPage implements OnInit {

  //markets;

  constructor(private router: Router, private uploadAmazonService: UploadAmazonService) { 
    //uploadAmazonService.getMarkets().subscribe((res: any) => {
    //  this.markets = res.markets
    //})
  }

  ngOnInit() {
  }

  onClick(){
    this.router.navigateByUrl('/tabs/tab4');
  }

  access(){
    this.router.navigateByUrl('/tabs/tab4/vendor-menu');
  }

  save(username, password, market, description){
    console.log({username, password, market, description})
    //this.uploadAmazonService.createUser({username, password, market, description});
  }

}
