import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import {ProductsComponent}  from './components/products/products.component';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import {EmployeeComponent} from './components/employee/employee.component'
// Guards
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/signin',
    pathMatch: 'full'
  },
  {
    path:'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },  
  {
    path:'products',
    component: ProductsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'employees',
    component: EmployeeComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
