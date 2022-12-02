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
  book: any;
  rating: any = 0.0;
  comment: any;
  feedbackList: any;
  getBookById: any;
  qty: any;
  review: any;
  star: any;
  books: any;
 constructor(private getBook: GetbooksService, private feedback: FeedbackService,private wishListService:WishlistService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getbook()
    this.getAllFeedback(this.bookId)
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


  getAllFeedback(bookId: any) {
    this.feedback.getFeedback(bookId).subscribe((response: any) => {
      console.log("GetAll feedback successful", response);
      this.feedbackList = response.data;
    });
  }
  addFeedback() {
    let reqData = {
      rating: parseInt(this.rating),
      comment: this.comment,
    }
    this.feedback.addFeedback(reqData,this.bookId).subscribe((response: any) => {
      console.log("Feedback submitted successfully", response);
      this.getAllFeedback(this.bookId);
    });
    this.comment = '';
    this.rating = 0.0;
  }

  getShortName(name: any) {
    return name.split(' ').map((n: any) => n[0]).join('');
  }
  addToWishlist() {
    let reqData = {
      bookId: this.getBookById.bookId,
    }
    this.wishListService.addToWishlist(reqData, this.bookId).subscribe((response: any) => {
      console.log("Added to wishlist", response);
    });
  }
  addToCart(){
      let reqData = {
        bookId : this.getBookById,
        quantity : 1
      }
      this.cartService.addToCart(reqData,this.bookId).subscribe((response :any) =>{
        console.log("Cart responce data",response)
  
      })
    }

  // bookId = localStorage.getItem('bookId');
  // getBookById: any;
  // qty: any;
  // review: any;
  // star: any;
  // feedbackList: any;
  // books: any;
  // constructor(private getBook: GetbooksService, private feedback: FeedbackService,private wishListService:WishlistService,private cartService:CartService) { }

  // ngOnInit(): void {
  //   this.getbook()
  //   this.getFeedback()
  // }
  // getbook() {
  //   this.getBook.getBookById(this.bookId).subscribe((response: any) => {
  //     this.getBookById = response.data;
  //     this.qty = response.data.quantity;
  //     console.log(this.bookId)
  //     console.log(this.getBookById);
  //     console.log(this.qty);
  //   })
  // }
  // addToWishlist(){
  //   let requireData={
  //     bookId:this.getBookById.bookId,
  //   }
  //   this.wishListService.addToWishlist(requireData,this.bookId).subscribe((res:any)=>{
  //     console.log("responce data wishlist ",res);
  //   })
  // }

  // addToCart(){
  //   let reqData = {
  //     bookId : this.getBookById,
  //     quantity : 1
  //   }
  //   this.cartService.addToCart(reqData,this.bookId).subscribe((response :any) =>{
  //     console.log("Cart responce data",response)

  //   })
  // }
  // onSubmit() {
  //   let reqData = {
  //     rating: this.star,
  //     comment: this.review,
  //     bookId: this.getBookById.bookId
  //   }
  //   this.feedback.addFeedback(reqData).subscribe((response: any) => {
  //     console.log(response);
  //   })
  // }
  // rating1() {
  //   this.star = 1
  //   console.log(this.star)
  // }
  // rating2() {
  //   this.star = 2
  //   console.log(this.star)
  // }
  // rating3() {
  //   this.star = 3
  //   console.log(this.star)
  // }
  // rating4() {
  //   this.star = 4
  //   console.log(this.star)
  // }
  // rating5() {
  //   this.star = 5
  //   console.log(this.star)
  // }
  // getFeedback() {
  //     this.feedback.getFeedback(this.bookId).subscribe((response: any) => {
  //     console.log(response);
  //     this.feedbackList = response.data
  //     console.log(this.feedbackList)
  //   })
  // }
}