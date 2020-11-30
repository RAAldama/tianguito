import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadAmazonService } from 'src/app/services/upload-amazon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private userService: UserService, private amazon: UploadAmazonService) { }

  ngOnInit() {
  }

  submitUser(username, email, password, phone, address){
    var mexicoPhone = "+52"+phone
    this.userService.registerUser({username, email, password, phone: mexicoPhone, address}).subscribe(res => {
      console.log(res)
    });

    //this.router.navigateByUrl('/tabs/tab1');
  }

}
