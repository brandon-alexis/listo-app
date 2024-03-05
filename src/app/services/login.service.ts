import { EventEmitter, Injectable, Output } from '@angular/core';
import { T_Login } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  @Output() loginEvent: EventEmitter<T_Login> = new EventEmitter();

  constructor() {}
}
