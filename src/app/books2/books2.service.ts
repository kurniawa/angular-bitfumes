import { Injectable } from '@angular/core';
import { Book } from './../types/Book';

// @Injectable({
//   providedIn: 'root',
// })
export class Books2Service {
  constructor() {}
  books: Book[] = [
    {
      title: 'clean code',
      author: 'Robert C. Martin',
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      price: 300000,
    },
    {
      title: 'dd lov ak',
      author: 'So Much Forever Always',
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      price: 270000,
    },
  ];

  getBooks() {
    return this.books;
  }

  /**
   * Dari namanya aja injectable. Tujuan service ini untuk menyuntikkan data atau fungsi
   * yang ingin kita masukkan ke dalam component.ts terkait, supaya kodingan di component.ts
   * terlihat lebih rapih aja. Teknik ini dinamakan Dependency Injection (DI)
   *
   * Cara supaya injectable tidak provide ke root adalah dengan membuat module tersendiri
   * untuk books2. Lalu di books2.module kita register service nya.
   *
   * Lalu kita perlu ke app.module untuk memodifikasi importnya. Yang kita import
   * tidak lagi component nya melainkan books2.module nya.
   *
   * Sedangkan untuk books2.component, biarlah diimport pada books2.module nya.
   */
}
