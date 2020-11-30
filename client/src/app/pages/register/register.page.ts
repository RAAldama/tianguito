import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  login: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitUser(user, market){
    console.log(user, market);

    this.router.navigateByUrl('/tabs/tab1');
  }

  loginUser(){
    this.router.navigateByUrl('/tabs/tab1');
  }

}
