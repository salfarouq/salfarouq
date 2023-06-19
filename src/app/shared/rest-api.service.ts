
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Wanafunzi } from './wanafunzi';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {

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
  // HttpClient API get() method => Fetch mwanafunzis list
  getmwanafunzis(): Observable<Wanafunzi> {
    return this.http
      .get<Wanafunzi>(this.apiURL + '/wanfunzi')
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API get() method => Fetch mwanafunzi
  getmwanafunzi(id: any): Observable<Wanafunzi> {
    return this.http
      .get<Wanafunzi>(this.apiURL + '/wanfunzi/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API post() method => Create mwanafunzi
  createmwanafunzi(wanafunzi: any): Observable<Wanafunzi> {
    return this.http
      .post<Wanafunzi>(
        this.apiURL + '/wanfunzi',
        JSON.stringify(wanafunzi),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API put() method => Update mwanafunzi
  updatemwanafunzi(id: any, Wanafunzi: any): Observable<Wanafunzi> {
    return this.http
      .put<Wanafunzi>(
        this.apiURL + '/wanfunzi/' + id,
        JSON.stringify(Wanafunzi),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API delete() method => Delete mwanafunzi
  deletemwanafunzi(id: any) {
    return this.http
      .delete<Wanafunzi>(this.apiURL + '/wanfunzi/' + id, this.httpOptions)
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