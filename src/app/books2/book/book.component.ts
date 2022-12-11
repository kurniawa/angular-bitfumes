import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(private cartSevice: CartService) {}
  ngOnInit(): void {
    // console.log('onInit Book');
  }
  @Input() book: Book = {} as Book;
  @Output() emitBook = new EventEmitter<Book>();

  addToCart() {
    // console.log(this.book);
    this.emitBook.emit(this.book);
    /**
     * emit disini sudah tidak diperlukan, karena sekarang kita menggunakan service
     */
    this.cartSevice.addItem(this.book);
  }
}
