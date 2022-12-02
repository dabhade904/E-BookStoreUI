import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { GetbooksService } from 'src/app/services/getbook-service/getbooks.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartlist:any;
  defaultImage: any = "https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";
  step: number = 0;
  wishListItems: any={};
  fullName: any;
  mobileNumber: any;
  addressList: any;
  addressId = 0;
  addressObj: any;
  isAddEditAddress: boolean = false;
  edit =false;
  address: any;
  city: any;
  state: any;
  addressType: any
  bookId: any;
  qty: any;
  resultArray:any;
  getWishListBooks = new Array()

  constructor(private cart: CartService,private bookService:GetbooksService,
    private router:Router) { }

  ngOnInit(): void {
    this.fullName = localStorage.getItem('name');
    this.mobileNumber = localStorage.getItem('mobile');
   this.getCartlist();
  //  this. getCartData() ;
  }
  //geetting  cart
  getCartlist() {
    this.cart. getCart().subscribe((response: any) => {
      console.log("Got All cart items", response);
      this.cartlist = response;
       this.qty = this.cartlist.length;
      console.log('BookIds : ', this.cartlist);
      console.log('BookIds : ', this.cartlist.cartsQty);  
    });
  }

  getCartData() {
    this.cart.getCart().subscribe((response: any) => {
      console.log(response);
      this.wishListItems = response;
      this.qty = this.wishListItems.length;
      this.wishListItems.forEach((element: any) => {
        console.log(element)
        this.bookService.getBookById(element.bookId).subscribe((response: any) => {
          console.log(response)
          this.getWishListBooks.push(response.data)
        })
      })
      console.log(this.getWishListBooks)
    })
  }  

  
  decreaseQty(cartId: any, cartsQty: any) {
    this.cart.updateCart(cartId, (cartsQty - 1)).subscribe((response: any) => {
      console.log("Cart Qty decreased",cartsQty);
      this.getCartlist();
    })
  }

  increaseQty(cartId: any, cartsQty: any) {
    this.cart.updateCart(cartId, (cartsQty + 1)).subscribe((response: any) => {
      console.log("Cart Qty increased");
      this.getCartlist();
    })
  }

  stepUp2() {
    this.step = 2;
  }

  stepUp() {
    this.step = 1;
  }


  removeFromCart(cartId: any) {
    this.cart.removeFromCart(cartId).subscribe((response: any) => {
      console.log("Removed from cart");
      this.getCartlist();
    })
  }
  
}
