import { Injectable } from '@angular/core';
import {URL} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Token} from "../modules/auth/interfaces/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = URL

  constructor(private http: HttpClient) { }

  login(username: string,password:number): Observable<Token> {
    const credentials = { username, password };
    return this.http.post<Token>(this.apiUrl+'login', credentials);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
