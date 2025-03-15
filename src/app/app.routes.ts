import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoanApplicationsComponent } from './components/loan-applications/loan-applications.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MyApplicationsComponent } from './components/my-applications/my-applications.component';
import { ApprovedApplicationsComponent } from './components/approved-applications/approved-applications.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'customer',
                component: CustomerComponent
            },
            {
                path: 'loan-applications',
                component: LoanApplicationsComponent
            },
            {
                path: 'approvals',
                component: ApprovalsComponent
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent
            },
            {
                path: 'my-applications',
                component: MyApplicationsComponent
            },
            {
                path: 'approved-applications',
                component: ApprovedApplicationsComponent
            },
        ]
    },
];
