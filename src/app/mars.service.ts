import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarsService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<Object> {
    // return this.http.get(environment.NASA_API_URL);
    const marsData = [];
    return this.http.get(environment.NASA_API_URL);
      // .pipe(
      //   map(data => marsData[0]), // returns a {0|1} element array
      //   tap(h => {
      //     const outcome = h ? `fetched` : `did not find`;
      //     console.log(`${outcome} `);
      //   }),
      //   catchError(this.handleError(`hi there`))
      // );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any) => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      // return of(result as T);
    };
  }
  
}
