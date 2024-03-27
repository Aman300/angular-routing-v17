import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';


export const routes: Routes = [
    { path: '',title:"Login", component: LoginComponent },
    { path: 'DashBoad',title:"DashBoard", component: DashboardComponent },
    { path: 'SignUp',title:"SignUp", component: SignupComponent },
    { path: 'Login',title:"Login", component: LoginComponent },

];
