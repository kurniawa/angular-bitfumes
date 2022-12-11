import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { Login, Register } from '../types/Auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  isLoading: boolean = false;
  isAuthenticated: boolean = false;

  login(form: Login) {
    // console.log(form.email, form.password);
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log('displayName: ', user.displayName);
        this.isAuthenticated = true;
        this.router.navigate(['']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Credentials does not match our record!');
        this.isAuthenticated = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  register(form: Register) {
    if (this.isLoading) return;
    if (form.password !== form.confirm_password) {
      return;
    }
    this.isLoading = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.router.navigate(['login']);
        this.isAuthenticated = false;
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
