import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetbooksService } from 'src/app/services/getbook-service/getbooks.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent {
 
  bookList : any;
  totalBooks: any;
  constructor(private bookService : GetbooksService, private route : Router) { }

  ngOnInit(): void {
    this.onSubmit()
  }

  onSubmit(){
    this.bookService.getBooks().subscribe((response : any) =>{
      console.log(response);
      this.bookList = response.data;
      this.totalBooks = response.data.length;
      console.log("onsubmit book get data",this.bookList);
      console.log(this.totalBooks)
    })
  }
  quickView(books : any){
    console.log("bookgljjjjjjjjjjjjjh id ",books.bookId)
    console.log("bookghkkkkkkkkkk data",books);
    localStorage.setItem('bookId', books.id);
    this.route.navigateByUrl("/home/quickView")
  }
}
