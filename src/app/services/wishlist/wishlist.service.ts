import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../http-service/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  token:any;

  constructor(private http: HttpserviceService) { 
    this.token = localStorage.getItem('tokan');
  }

  getWishlist(){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService('https://localhost:44371/api/Wishlist/GetAllWishlist',true,header)
  }

  addToWishlist(data:any ,bookId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postAuthorised('https://localhost:44371/api/Wishlist/Add?BookId='+bookId, data, true, header);
  }

  removeFromWishlist(wishListId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.deleteService('https://localhost:44371/api/Wishlist/Delete?wishlistId='+wishListId,true,header)
  }
}
