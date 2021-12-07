import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BooksServiceService} from "../books-service.service";
import {Router} from "@angular/router";
import {Book} from "../../book";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  AddBookForm?: FormGroup

  constructor(private fb: FormBuilder,
              private BooksService: BooksServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.AddBookForm = this.fb.group({
      title: [],
      author: [],
      description: []
    })
  }

  // @ts-ignore
  submit() {
    let book = this.AddBookForm?.value
    console.log(book)
    if (book.title !== null && book.author!== null && book.description !== null){
      return this.BooksService.create(book).subscribe(data =>{
        this.router.navigate([''])
      })
    }

  }

}
