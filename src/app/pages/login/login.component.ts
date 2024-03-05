import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CarrouselComponent } from '../../carrousel/carrousel.component';
import { T_CarrouselImage } from '../../types/Carrousel';
import { LoginService } from '../../services/login.service';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CarrouselComponent,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  carrouselImages: T_CarrouselImage[] = [
    {
      src: './assets/carrousel/1.png',
      alt: 'banner 1',
    },
    {
      src: './assets/carrousel/2.png',
      alt: 'banner 2',
    },
    {
      src: './assets/carrousel/3.png',
      alt: 'banner 3',
    },
  ];

  loginForm = this.formBuilder.group({
    user: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(20)],
    ],
    password: ['', [Validators.required, Validators.maxLength(20)]],
  });

  user = this.loginForm.controls.user;
  password = this.loginForm.controls.password;

  isModalActive = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  onLogin() {
    if (this.loginForm.valid) {
      this.http
        .post(
          'https://apimocha.com/loginplaytech/exitologin',
          this.loginForm.contains
        )
        .subscribe((res: any) => {
          if (res.status !== 200) {
            console.error('There was a error making the request');
          }

          localStorage.setItem('token', res.payload.token);
          this.loginService.loginEvent.emit(res.payload);
          this.router.navigateByUrl('/dashboard', { state: res.payload });
          this.loginForm.reset();
        });
    } else {
      this.loginForm.markAllAsTouched();
      this.isModalActive = true;
    }
  }
}
