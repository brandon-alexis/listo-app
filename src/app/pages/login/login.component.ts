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

type T_Login = {
  user: string;
  password: string;
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    user: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(20)],
    ],
    password: ['', [Validators.required, Validators.maxLength(20)]],
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
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

          console.log(res.payload);
          this.router.navigateByUrl('/dashboard', { state: res.payload });
          this.loginForm.reset();
        });
    } else {
      alert('error al ingresar los datos');
    }
  }
}
