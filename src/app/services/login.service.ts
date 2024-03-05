import { EventEmitter, Injectable, Output } from '@angular/core';
import { T_Login } from '../types/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  @Output() loginEvent: EventEmitter<T_Login> = new EventEmitter();

  constructor(private http: HttpClient) {}

  fetchLogin(data: any) {
    return this.http
      .post('https://apimocha.com/loginplaytech/exitologin', data)
      .pipe((res: any) => {
        return res;
      });
  }
}
