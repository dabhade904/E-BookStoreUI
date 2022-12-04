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
  cartlist = new Array()
  defaultImage: any = "https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";
  step: number = 0;
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
  getWishListBooks = new Array()
  id:any;
  constructor(private cart: CartService,private bookService:GetbooksService,
    private router:Router) { }

  ngOnInit(): void {
    this.fullName = localStorage.getItem('name');
    this.mobileNumber = localStorage.getItem('mobile');
    //this.getCartlist();
    this.getCart();
  }
  //geetting  cart

  getCart() {
    this.cart.getCart().subscribe((response: any) => {
      console.log(response);
      this.cartlist = response;
      //this.id=this.cartlist
      //console.log("id is",this.id); 
      this.cartlist.forEach((element: any) => {
        console.log(element)
        this.bookService.getBookById(element.bookId).subscribe((response: any) => {
          console.log(response);
          this.getWishListBooks.push(response);
        })
      });
      
    })
    console.log("data",this.getWishListBooks)
  }

  getCartlist() {
    this.cart. getCart().subscribe((response: any) => {
      console.log("Got All cart items", response);
      this.cartlist = response;
      console.log('BookIds : ', this.cartlist);  
    });
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
