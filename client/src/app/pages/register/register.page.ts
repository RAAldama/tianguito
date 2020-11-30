import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadAmazonService } from 'src/app/services/upload-amazon.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  login: boolean = false;
  confirmation = ""

  constructor(private router: Router, private userService: UserService, private amazon: UploadAmazonService) { }

  ngOnInit() {
  }

  submitUser(username, email, password, phone, address){
    var mexicoPhone = "+52"+phone
    this.userService.registerUser({username, email, password, phone: mexicoPhone, address}).subscribe(res => {

      this.login = true;

      Swal.fire({
        title: 'Success!',
        text: 'Cuenta creada, recuerda que se debe de verificar antes de ser válido el acceso',
        icon: 'success',
        confirmButtonText: 'Cool'
      });
    });

  }

  loginUser(email,password){
    this.userService.loginUser({email,password}).subscribe((res:any) => {
      if(res.logged){
        console.log(res)
        this.router.navigateByUrl('/tabs/tab1');
      }else{
        this.confirmation = "Error al iniciar sesión, revisar datos de inicio de sesión"
        console.log(this.confirmation)
        console.log("failure");

        Swal.fire({
          title: 'Oh no!',
          text: 'Hay un error en el inicio de sesión o en su verificación',
          icon: 'error',
          confirmButtonText: 'Entiendo'
        });
      }
    })
  }

}
