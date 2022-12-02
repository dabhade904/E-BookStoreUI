import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../http-service/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  tokan = localStorage.getItem('tokan')
  constructor(private httpService :HttpserviceService) { }

  addFeedback(data : any,bookId:any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.tokan
      })
    }
    return this.httpService.postAuthorised('https://localhost:44371/api/Feedback/AddFeedback?bookId='+bookId, data, true, header);
  }

  getFeedback(bookId : any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.tokan
      })
    }
    return this.httpService.getService('https://localhost:44371/api/Feedback/GetAll?bookId='+bookId, true, header);
  }

}
