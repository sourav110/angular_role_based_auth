import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  http = inject(HttpClient);
  router = inject(Router);
  loginUserObj = new LoginUser();


  onLogin() {
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/login", this.loginUserObj).subscribe((res: any) => {
      if(res.result) {
        alert('Login Success');
        console.log(res.data);
        localStorage.setItem("loginUserData", JSON.stringify(res.data));

        if(res.data.role == "BankEmployee") {
          this.router.navigateByUrl('loan-applications');
        } else {
          this.router.navigateByUrl('my-applications');
        }
      } else {
        alert('Invalid Credentials');
      }
    });
  }
}

export class LoginUser {
  userName: string;
  password: string;

  constructor() { 
    this.userName = "";
    this.password = "";
  }
}

//Customer
// sagarmasal
// ssm123

// BankEmployee
// sachin123
// 1234567