import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Books2Service } from './books2.service';
import { BookssComponent } from './books2.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [BookssComponent, BookComponent],
  providers: [Books2Service],
  imports: [CommonModule],
  exports: [BookssComponent],
})
export class Books2Module {}
