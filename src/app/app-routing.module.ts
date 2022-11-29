import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookQuickViewComponent } from './components/book-quick-view/book-quick-view.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetBooksComponent } from './components/get-books/get-books.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'signup', component:SignUpComponent},
  {path:'login', component:LoginComponent},
  {path:'forgetpassword', component : ForgetPasswordComponent},
  {path:'resetpassword/:token', component : ResetPasswordComponent},
 // { path : 'quickView', component:BookQuickViewComponent},  
  {path :'home', component : HomeComponentComponent,
  children : [
    {path:'', redirectTo:"/home/getbooks", pathMatch:'full' },
    { path : 'getbooks', component:GetBooksComponent},
    { path : 'quickView', component:BookQuickViewComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//  // { path: '', redirectTo: "/login", pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignUpComponent },
//   { path: 'forgetpassword', component: ForgetPasswordComponent },
//   { path: 'resetpassword/:token', component: ResetPasswordComponent },
//   {path :'home', component : HomeComponentComponent,
//   children : [
//     {path:'', redirectTo:"/home", pathMatch:'full' },
//     { path : 'getbooks', component:GetBooksComponent},
//     { path : 'bookview', component:BookQuickViewComponent},
//   ]
// }
//   // {
//   //   path: 'home', component: HomeComponentComponent, canActivate: [AuthguardGuard],
//   //   children: [
//   //    { path: '', redirectTo: '/home', pathMatch: 'full' },     
//   //    { path: 'bookview', component: BookQuickViewComponent },


//   //   ]
//   // },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }