import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { Books2Module } from './books2/books2.module';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, Books2Module],
  declarations: [AppComponent, BooksComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
