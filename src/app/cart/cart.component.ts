import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  items: Book[] = [];
  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
