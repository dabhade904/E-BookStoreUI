import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private httpClient: HttpClient) { }
  postService(url: string, data: any, token: boolean = false, options: any) {
    return this.httpClient.post(url, data, token && options)
  }
}
