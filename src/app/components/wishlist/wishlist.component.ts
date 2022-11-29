import { Component } from '@angular/core';
import { GetbooksService } from 'src/app/services/getbook-service/getbooks.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishListItems : any
  qty : any;
  getWishListBooks = new Array()
  constructor(private wishListservice : WishlistService, private bookService : GetbooksService) { }

  ngOnInit(): void {
    this.getWishlist()
  }
  getWishlist() {
    this.wishListservice.getWishlist().subscribe((response : any) => {
      console.log(response);
      this.wishListItems = response.data
      this.qty = this.wishListItems.length
      this.wishListItems.forEach((element : any) =>{
        console.log(element)
        this.bookService.getBookById(element.bookId).subscribe((response : any)=>{
          console.log(response)
          this.getWishListBooks.push(response.data)
        })
      })
      console.log(this.getWishListBooks)
    })
  }
  
}
