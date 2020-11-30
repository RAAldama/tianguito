import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadAmazonService } from '../../../services/upload-amazon.service';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.page.html',
  styleUrls: ['./vendor-register.page.scss'],
})
export class VendorRegisterPage implements OnInit {

  markets;
  createForm = false;
  modifyForm = false;

  constructor(private router: Router, private uploadAmazonService: UploadAmazonService) { 
    uploadAmazonService.getMarkets().subscribe((res: any) => {
      console.log(res.markets)
      this.markets = res.body.markets
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

  createStand(market, stand){
    console.log({market, stand})
    this.uploadAmazonService.createStand({market, stand}).subscribe(ans => {console.log(ans)});
  }

  submitMarket(name){
    this.uploadAmazonService.createMarket({name}).subscribe(ans => {console.log(ans)})
    this.createForm = false;
  }

  updateMarket(oldName, newName){
    this.uploadAmazonService.updateMarket(oldName, newName).subscribe(ans => {console.log(ans)})
    this.modifyForm = false;
  }

}
