import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../http-service/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: any;
  constructor(private http: HttpserviceService) {
    this.token = localStorage.getItem('tokan');
  }

  getCart() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.getService('https://localhost:44371/api/Cart/GetAllBooksInCart', true, header);
  }

  addToCart(reqData: any,bookId:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.postAuthorised('https://localhost:44371/api/Cart/AddToCart?bookId='+bookId, reqData, true, header);
  }

  updateCart(cartId: any, cartQty: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.putService('https://localhost:44349/api/Cart/UpdateQty?cartId=' + cartId + '&cartQty=' + cartQty, cartId, true, header);
  }

  removeFromCart(cartId: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.deleteService('https://localhost:44349/api/Cart/Delete?cartId='+cartId, true, header);
  }
}
