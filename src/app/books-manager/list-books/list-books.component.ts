import {Component, OnInit} from '@angular/core';
import {BooksServiceService} from "../books-service.service";
import {Router} from "@angular/router";
import {Book} from "../../book";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  Books?: Book[]
  quantity?: number

  constructor(private BooksService: BooksServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.BooksService.index().subscribe(data => {
      this.Books = data
      console.log(this.Books)
      this.quantity = this.Books?.length
    })
  }


}
