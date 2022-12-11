import { Component } from '@angular/core';

interface Book {
  author: string;
  title: string;
  image: string;
  price: number;
}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
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
  isDisable: boolean = false;
  titleToSearch: string = '';
  twoWayBindingReal: string = '';
  isShowing: boolean = true;

  handleClick() {
    console.log('clicked!');
    this.isDisable = true;
  }

  handleMouseOver() {
    console.log('mouseover!');
  }

  twoWayBinding(event: any) {
    // Ini bukan cara two way binding yang sebenarnya
    console.log(event);
    console.log(event.target.value);
    this.titleToSearch = event.target.value;
  }
  toggleBook() {
    this.isShowing = !this.isShowing;
  }
}
