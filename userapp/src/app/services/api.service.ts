import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //  users: UserDetailsModel[] = [];
  private apiUrl = "https://localhost:7086/api";

  constructor(private http:HttpClient) { }

  login(loginData: { email: string; password: string; }): Observable<any> {
    return this.http.post(`${this.apiUrl}/User/login`, loginData);
  }


  register(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/User/register`,data);
  }

}
