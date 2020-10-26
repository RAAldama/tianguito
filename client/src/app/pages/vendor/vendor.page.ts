import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadAmazonService } from '../../services/upload-amazon.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.page.html',
  styleUrls: ['./vendor.page.scss'],
})
export class VendorPage implements OnInit {

  constructor(private router: Router, private uploadAmazonService: UploadAmazonService) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigateByUrl('/tabs/tab4/vendor-register');
  }

  access(){
    this.router.navigateByUrl('/tabs/tab4/vendor-menu');
  }

  save(username, password){
    console.log({username, password});
    //this.uploadAmazonService.getUser();
  }

}
