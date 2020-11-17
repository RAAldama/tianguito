import { Component, OnInit } from '@angular/core';
import { UploadAmazonService } from '../../../services/upload-amazon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-menu',
  templateUrl: './vendor-menu.page.html',
  styleUrls: ['./vendor-menu.page.scss'],
})
export class VendorMenuPage implements OnInit {

  constructor(private uploadAmazonService: UploadAmazonService, private router: Router) { }

  ngOnInit() {
  }

  createProduct(name, description, price){
    this.uploadAmazonService.createProduct({name, description, price}).subscribe(ans => {console.log(ans)});
  }

  productsList(){
    this.router.navigateByUrl('/tabs/tab4/vendor-products');
  }
}
