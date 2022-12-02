import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoginComponent } from './components/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HomeComponentComponent } from './components/home-component/home-component.component'; 
import { GetBooksComponent } from './components/get-books/get-books.component';
import { BookQuickViewComponent } from './components/book-quick-view/book-quick-view.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    HomeComponentComponent,
    GetBooksComponent,
    BookQuickViewComponent,
    WishlistComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule,BrowserModule,FormsModule, ReactiveFormsModule,MatToolbarModule,HttpClientModule,MatMenuModule,MatCardModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,MatCheckboxModule,MatIconModule,
    MatSelectModule,MatExpansionModule,MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
