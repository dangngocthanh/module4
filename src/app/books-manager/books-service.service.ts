import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const API_URL = `${environment.API_URL}`;

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  constructor(private http: HttpClient) {
  }

  index(): Observable<any> {
    return this.http.get<any>(API_URL + '/books')
  }

  GetBookById(id: number | undefined): Observable<any> {
    return this.http.get<any>(API_URL + '/books/' + id)
  }

  create(book: any): Observable<any> {
    return this.http.post<any>(API_URL + '/books', book)
  }

  delete(id: number | undefined): Observable<any> {
    return this.http.delete<any>(API_URL + '/books/' + id)
  }

  update(id: number, book: any): Observable<any> {
    return this.http.put<any>(API_URL + '/books/' + id, book)
  }
}
