import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  http = inject(HttpClient);
  router = inject(Router);
  loginUserObj = new LoginUser();


  // onLogin() {
  //   this.http.post("https://projectapi.gerasim.in/api/BankLoan/login", this.loginUserObj).subscribe((res: any) => {
  //     debugger
  //   });
  // }
}

export class LoginUser {
  userName: string;
  password: string;

  constructor() { 
    this.userName = "";
    this.password = "";
  }
}
