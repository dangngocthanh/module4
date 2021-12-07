import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BooksServiceService} from "../books-service.service";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book?: any
  id?: number

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
      })
    })
  }

  submit() {
    this.BooksService.delete(this.id).subscribe(data => {
      this.router.navigate([''])
    })
  }
}
