import { Injectable } from '@angular/core';
import { Walimu } from './walimu';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApi2Service {

    // Define API
    apiURL = 'http://localhost:3000';
    constructor(private http: HttpClient) {}
    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/
    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    // HttpClient API get() method => Fetch mwalimus list
    getmwalimus(): Observable<Walimu> {
      return this.http
        .get<Walimu>(this.apiURL + '/walimu')
        .pipe(retry(1), catchError(this.handleError));
    }
    // HttpClient API get() method => Fetch mwalimu
    getmwalimu(id:any):Observable<Walimu> {
      return this.http
        .get<Walimu>(this.apiURL + '/walimu/' + id)
        .pipe(retry(1), catchError(this.handleError));
    }
    // HttpClient API post() method => Create mwalimu
    createmwalimu(walimu: any): Observable<Walimu> {
      return this.http
        .post<Walimu>(
          this.apiURL + '/walimu',
          JSON.stringify(walimu),
          this.httpOptions
        )
        .pipe(retry(1), catchError(this.handleError));
    }
    // HttpClient API put() method => Update mwalimu
    updatemwalimu(id: any, walimu: any): Observable<Walimu> {
      return this.http
        .put<Walimu>(
          this.apiURL + '/walimu/' + id,
          JSON.stringify(walimu),
          this.httpOptions
        )
        .pipe(retry(1), catchError(this.handleError));
    }
    // HttpClient API delete() method => Delete mwalimu
    deletemwalimu(id: any) {
      return this.http
        .delete<Walimu>(this.apiURL + '/walimu/' + id, this.httpOptions)
        .pipe(retry(1), catchError(this.handleError));
    }
    // Error handling
    handleError(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(() => {
        return errorMessage;
      });
    }
}

