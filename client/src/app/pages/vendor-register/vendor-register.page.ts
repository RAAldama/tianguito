import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadAmazonService } from '../../services/upload-amazon.service';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.page.html',
  styleUrls: ['./vendor-register.page.scss'],
})
export class VendorRegisterPage implements OnInit {

  markets;
  //markets;
  createForm = false;
  modifyForm = false;

  constructor(private router: Router, private uploadAmazonService: UploadAmazonService) { 
    uploadAmazonService.getMarkets().subscribe((res: any) => {
      this.markets = res.markets
    })

  }

  ngOnInit() {
  }

  onClick(){
    this.router.navigateByUrl('/tabs/tab4');
  }

  access(){
    this.router.navigateByUrl('/tabs/tab4/vendor-menu');
  }

  save(username, password, market, stand){
    console.log({username, password, market, stand})
    //this.uploadAmazonService.createUser({username, password, market, description});
  }

  submitMarket(name){
    this.createForm = false;
    console.log({name})
  }

  updateMarket(oldName, newName){
    this.modifyForm = false;
    console.log({oldName, newName})
  }

}
