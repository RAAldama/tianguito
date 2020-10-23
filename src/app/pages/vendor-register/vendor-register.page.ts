import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.page.html',
  styleUrls: ['./vendor-register.page.scss'],
})
export class VendorRegisterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigateByUrl('/tabs/tab4');
  }

}
