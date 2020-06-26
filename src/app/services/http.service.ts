import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  Token: string;

  constructor(
    public httpClient: HttpClient
  ) { }


  setHeaders(sendJWT = true) {
    let headers = new HttpHeaders();
    if (sendJWT) {
        headers = headers.append('Authorization', 'JWT ' + this.Token);
    }
    return headers;
  }

  get(endpoint, sendJWT = true) {
    return this.httpClient.get<any>(`${environment.apiUrl}/${endpoint}`, {
      headers: this.setHeaders(sendJWT),
    });
  }

  post(data, endpoint, sendJWT = true) {
    return this.httpClient.post<any>(`${environment.apiUrl}/${endpoint}`, data, {
      headers: this.setHeaders(sendJWT),
    });
  }

  put(data, endpoint, sendJWT = true) {
    return this.httpClient.put<any>(`${environment.apiUrl}/${endpoint}`, data, {
      headers: this.setHeaders(sendJWT),
    });
  }

  patch(data, endpoint, sendJWT = true) {
    return this.httpClient.patch<any>(`${environment.apiUrl}/${endpoint}`, data, {
      headers: this.setHeaders(sendJWT),
    });
  }

  delete(id, endpoint, sendJWT = true) {
    return this.httpClient.delete(`${environment.apiUrl}/${endpoint}/${id}`, {
      headers: this.setHeaders(sendJWT),
    });
  }

}
