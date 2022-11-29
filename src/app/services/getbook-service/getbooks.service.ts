import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../http-service/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class GetbooksService {
  tokan: any;
  constructor(private httpService: HttpserviceService) {
    this.tokan = localStorage.getItem("tokan")
  }  
  getBooks() {
    console.log(this.tokan);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.tokan
      })
    }
    return this.httpService.getService('https://localhost:44371/api/Book/GetAllBook', true, header)
  }

  getBookById(bookId:any){
    let header = {
      headers : new HttpHeaders ({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.tokan
      })
    }
    return this.httpService.getService('https://localhost:44371/api/Book/GetBookById?bookId='+bookId, true, header);
  }
}