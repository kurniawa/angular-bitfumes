import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  books: Book[] = [];

  addItem(book: Book) {
    this.books.push(book);
    console.log(this.books);
  }

  getItems() {
    return this.books;
  }
}
