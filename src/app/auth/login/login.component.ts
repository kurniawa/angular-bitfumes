import { Component } from '@angular/core';
import { Login } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  form: Login = {
    email: '',
    password: '',
  };
  login() {
    // console.log(this.form.email, this.form.password);

    this.authService.login(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
