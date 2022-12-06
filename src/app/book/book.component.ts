import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  ngOnInit(): void {
    console.log('onInit Book');
  }
  @Input() book: Book = {} as Book;
  @Output() emitBook = new EventEmitter<Book>();

  addToCart() {
    // console.log(this.book);
    this.emitBook.emit(this.book);
  }
}
