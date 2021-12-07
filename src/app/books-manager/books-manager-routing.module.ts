import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListBooksComponent} from "./list-books/list-books.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";

const routes: Routes = [
  {
    path: '', component: ListBooksComponent
  },
  {
    path: 'createBook', component: CreateBookComponent
  },
  {
    path: 'editBook/:id', component: EditBookComponent
  },
  {
    path: 'detailBook/:id', component: DetailBookComponent
  },
  {
    path: 'deleteBook/:id', component: DeleteBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksManagerRoutingModule {
}
