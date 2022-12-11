import { Component, OnInit } from '@angular/core';
import { Books2Service } from './books2.service';

interface Book {
  author: string;
  title: string;
  image: string;
  price: number;
}
@Component({
  selector: 'app-books2',
  templateUrl: './books2.component.html',
  styleUrls: ['./books2.component.css'],
})
export class BookssComponent implements OnInit {
  constructor(private booksservice: Books2Service) {}
  books: Book[] = [];
  ngOnInit(): void {
    this.books = this.booksservice.getBooks();
  }

  cart: Book[] = [];
  addToCart(book: Book) {
    // console.log(book);
  }
  isShowing: boolean = true;
  toggleShowing() {
    this.isShowing = !this.isShowing;
  }
}
