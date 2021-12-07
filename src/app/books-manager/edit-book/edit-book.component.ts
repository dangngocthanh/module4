import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BooksServiceService} from "../books-service.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book?: any
  id?: number
  EditBookForm?: FormGroup

  constructor(private activeRouter: ActivatedRoute,
              private BooksService: BooksServiceService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = paramMap.get('id')
      this.BooksService.GetBookById(this.id).subscribe(data => {
        this.book = data
        console.log(this.book)
        this.EditBookForm = this.fb.group({
          id: [this.book.id],
          title: [this.book.title],
          author: [this.book.author],
          description: [this.book.description]
        })
      })
    })
  }

  submit() {
    let book = this.EditBookForm?.value
    this.BooksService.update(book.id, book).subscribe(data => {
        this.router.navigate([''])
    })
  }

}
