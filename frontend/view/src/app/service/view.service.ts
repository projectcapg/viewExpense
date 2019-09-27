import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExpenseClaimed } from '../model/expense-claimed';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ViewService {
  ed:ExpenseClaimed;
  private url: 'http://localhost:1111/view';
  constructor(private http: HttpClient) {

  }

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  getExpenseById(id: String): Observable<ExpenseClaimed> {
    //const url = `${this.url}/?id=${id}`
    return this.http.get<ExpenseClaimed>("http://localhost:1111/view/"+id)
  }

 

  // searchHeroes(term: string): Observable<ExpenseClaimed[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<ExpenseClaimed[]>(`${this.url}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found heroes matching "${term}"`)),
  //     catchError(this.handleError<ExpenseClaimed[]>('searchExpense', []))
  //   );
  // }
}
