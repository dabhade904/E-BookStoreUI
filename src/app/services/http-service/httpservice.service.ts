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

  postAuthorised(url: string, reqdata: any, token: boolean = true, httpOptions: any) {
    return this.httpClient.post(url, reqdata, token && httpOptions);
  }
  getService(url: string, token: boolean = false, options: any) {
    return this.httpClient.get(url, token && options)
  }
  deleteService(url: string, token: boolean, httpHeadersOptions: any) {
    return this.httpClient.delete(url,token && httpHeadersOptions)
  }

  putService(url: string, data: any, token: boolean, httpHeadersOptions: any) {
    return this.httpClient.put(url, data, token && httpHeadersOptions)
  }
}

