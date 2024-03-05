import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { T_Login } from '../../types/User';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user: T_Login;

  constructor(private loginService: LoginService) {
    // const localUser = localStorage.getItem('data')

    this.user = { nombre: 'default', apellido: 'default', login: 'default' };
  }

  ngOnInit(): void {
    this.loginService.loginEvent.subscribe((data: T_Login) => {
      this.user = data;
      console.log(data.login);
    });
  }
}
