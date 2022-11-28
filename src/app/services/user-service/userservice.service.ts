import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../http-service/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  tokan = localStorage.getItem('tokan');
  constructor(private http: HttpserviceService) { }
  SignUp(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.postService('https://localhost:44371/api/User/Register',data, false, header);
  }
 
  login(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.postService('https://localhost:44371/api/User/Login', data, false, header)
  }
  
  forgetPassword(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.postService('https://localhost:44371/api/User/ForgetPassword?emailId='+ data.email, {}, false , header);  
  }

  reset(data:any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.tokan
      })
    }
    return this.http.postAuthorised(`https://localhost:44371/api/User/ResetPassword?resetPassword=`+data.resetPassword+`&confirmPassword=`+data.confirmPassword,{}, true , header);
  }
}