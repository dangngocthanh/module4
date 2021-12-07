import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BooksManagerRoutingModule} from './books-manager-routing.module';
import {ListBooksComponent} from "./list-books/list-books.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {BooksManagerComponent} from './books-manager.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListBooksComponent,
    DetailBookComponent,
    DeleteBookComponent,
    EditBookComponent,
    CreateBookComponent,
    BooksManagerComponent
  ],
  exports: [
    BooksManagerComponent
  ],
  imports: [
    CommonModule,
    BooksManagerRoutingModule,
    ReactiveFormsModule

  ]
})
export class BooksManagerModule {
}
