import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.page.html',
  styleUrls: ['./vendor.page.scss'],
})
export class VendorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigateByUrl('/tabs/tab4/vendor-register');
  }

}
