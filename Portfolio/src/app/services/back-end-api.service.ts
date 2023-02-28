
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackEndAPIService {

  // _url= `${environment.baseUrl}/about/about-info`
  constructor(private _http: HttpClient) { }
  
  // submit(info : string) {
  //   return this._http.post<any>(this._url, info, {withCredentials: true , observe: "response" as "body"} )
  // }
  
  getResponse(){
    return this._http
    .get(`${environment.baseUrl}/home`, { 
      withCredentials: true,
      observe: "response" as "body",
    })
  }
}
