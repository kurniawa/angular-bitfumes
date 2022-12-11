import { Component } from '@angular/core';
import { Register } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}
  form: Register = {
    email: '',
    password: '',
    confirm_password: '',
  };

  validation = {
    email: { status: '', feedback: '' },
    password: { status: '', feedback: '' },
    confirm_password: { status: '', feedback: '' },
  };

  consoleLog(param: any) {
    console.log(param);
  }
  validateForm() {
    console.log(this.form);
  }
  register() {
    this.authService.register(this.form);
  }
  isLoading() {
    return this.authService.isLoading;
  }
}
