import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { FeedbackService } from 'src/app/services/feedback-service/feedback.service';
import { GetbooksService } from 'src/app/services/getbook-service/getbooks.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-book-quick-view',
  templateUrl: './book-quick-view.component.html',
  styleUrls: ['./book-quick-view.component.scss']
})
export class BookQuickViewComponent {
  bookId = localStorage.getItem('bookId');
  getBookById: any;
  qty: any;
  review: any;
  star: any;
  feedbackList: any;
  books: any;
  constructor(private getBook: GetbooksService, private feedback: FeedbackService,private wishListService:WishlistService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getbook()
    this.getFeedback()
  }
  getbook() {
    this.getBook.getBookById(this.bookId).subscribe((response: any) => {
      this.getBookById = response.data;
      this.qty = response.data.quantity;
      console.log(this.bookId)
      console.log(this.getBookById);
      console.log(this.qty);
    })
  }
  addToWishlist(){
    let requireData={
      bookId:this.getBookById.bookId,
    }
    this.wishListService.addToWishlist(requireData,this.bookId).subscribe((res:any)=>{
      console.log("responce data wishlist ",res);
    })
  }

  addToCart(){
    let reqData = {
      bookId : this.getBookById,
      quantity : 1
    }
    this.cartService.addToCart(reqData,this.bookId).subscribe((response :any) =>{
      console.log("Cart responce data",response.reqData)

    })
  }
  onSubmit() {
    let reqData = {
      rating: this.star,
      comment: this.review,
      bookId: this.getBookById.bookId
    }
    this.feedback.addFeedback(reqData).subscribe((response: any) => {
      console.log(response);
    })
  }
  rating1() {
    this.star = 1
    console.log(this.star)
  }
  rating2() {
    this.star = 2
    console.log(this.star)
  }
  rating3() {
    this.star = 3
    console.log(this.star)
  }
  rating4() {
    this.star = 4
    console.log(this.star)
  }
  rating5() {
    this.star = 5
    console.log(this.star)
  }
  getFeedback() {
      this.feedback.getFeedback(this.bookId).subscribe((response: any) => {
      console.log(response);
      this.feedbackList = response.data
      console.log(this.feedbackList)
    })
  }

  // addToCart(){
  //   let requireData={
  //     bookId:this.getBookById.id,
  //   }
  //   this.cartService.addToCart(requireData).subscribe((res:any)=>{
  //     console.log("responce data wishlist ",res);
  //   })
  // }
 
}