import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../http-service/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  tokan = localStorage.getItem('tokan')
  constructor(private httpService :HttpserviceService) { }

  addFeedback(data : any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.tokan
      })
    }
    return this.httpService.postAuthorised('https://localhost:44349/api/FeedBack/Add', data, true, header);
  }

  getFeedback(bookId : any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.tokan
      })
    }
    return this.httpService.getService('https://localhost:44349/api/FeedBack/GetAll?bookId='+bookId, true, header);
  }

}
