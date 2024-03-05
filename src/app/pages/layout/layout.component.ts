import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LoginService } from '../../services/login.service';
import { T_Login } from '../../types/User';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  user: T_Login;

  constructor(private router: Router, private loginService: LoginService) {
    this.user = {
      nombre: 'default',
      apellido: 'default',
      login: 'default',
    };
  }

  ngOnInit(): void {
    this.loginService.loginEvent.subscribe((data) => {
      this.user = data;
    });
  }

  onLogout() {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('token');
  }
}
