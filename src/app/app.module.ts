import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Books2Module } from './books2/books2.module';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    Books2Module,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]),
  ],
  declarations: [AppComponent, CartComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
