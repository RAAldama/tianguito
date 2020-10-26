import { Component, OnInit } from '@angular/core';
import { UploadAmazonService } from '../../services/upload-amazon.service';

@Component({
  selector: 'app-vendor-menu',
  templateUrl: './vendor-menu.page.html',
  styleUrls: ['./vendor-menu.page.scss'],
})
export class VendorMenuPage implements OnInit {

  constructor(private uploadAmazonService: UploadAmazonService) { }

  ngOnInit() {
  }

  save(productName, description, price){
    console.log({productName, description, price});
    //this.uploadAmazonService.createProduct({productName, description, price});
  }
}
