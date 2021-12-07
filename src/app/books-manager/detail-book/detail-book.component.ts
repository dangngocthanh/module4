import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BooksServiceService} from "../books-service.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

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

}
