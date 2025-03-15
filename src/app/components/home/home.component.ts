import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  router = inject(Router);

  // 1st Approach
  // menuList: any = {
  //   Customer: [
  //     { path: 'my-applications', title: 'My Applications' },
  //     { path: 'approved-applications', title: 'Approved Applications' },
  //   ], 
  //   BankEmployee: [
  //     { path: 'customer', title: 'Customer' },
  //     { path: 'loan-applications', title: 'Loan Applications' },
  //     { path: 'approvals', title: 'Approvals' },
  //     { path: 'change-password', title: 'Change Password' },
  //   ]
  // }

  //2nd Approach
  menuList: MenuItem[] = [
    { path: 'dashboard', title: 'Dashboard', roles: ['Customer', 'BankEmployee'] },
    { path: 'my-applications', title: 'My Applications', roles: ['Customer'] },
    { path: 'approved-applications', title: 'Approved Applications', roles: ['Customer'] },
    { path: 'customer', title: 'Customer', roles: ['BankEmployee'] },
    { path: 'loan-applications', title: 'Loan Applications', roles: ['BankEmployee'] },
    { path: 'approvals', title: 'Approvals', roles: ['BankEmployee'] },
    { path: 'change-password', title: 'Change Password', roles: ['BankEmployee'] },
  ];

  userwiseMenuList: any[] = [];

  ngOnInit(): void {
    debugger
    const loginUserData = localStorage.getItem('loginUserData');
    if (loginUserData) {
      const userData = JSON.parse(loginUserData);
      //1st Approach
      //this.userwiseMenuList = this.menuList[userData.role];

      //2nd Approach
      this.userwiseMenuList = this.menuList.filter(x => x.roles.includes(userData.role));

      console.log(this.userwiseMenuList);
    }
  }

  onLogout() {
    localStorage.removeItem("userId");
    this.router.navigateByUrl("login");
  }
}

interface RolePermission {
  Customer: MenuItem[],
  BankEmployee: MenuItem[]
}

interface MenuItem {
  path: string,
  title: string,
  roles: string[]
}
