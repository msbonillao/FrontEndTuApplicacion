import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {Contact} from './Models/contact'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {CustomResponse, CustomResponseDetail} from "./Models/custom-response";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RandomApiService {
  private url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb';
  private urldetail ='https://randomuser.me/api/';

  // URL to web api
  constructor(private http: HttpClient) { }


  getContactsList (): Observable<Contact[]> {
    // @ts-ignore
    return this.http.get<Contact[]>(this.url, httpOptions)
      .pipe(
        tap(() => console.info('fetched contacts')),
        //map((res) => res = res.map((response: CustomResponse)=> new CustomResponse().deserialize(response))),
        map(res => new CustomResponse().deserialize(res).results),
        catchError(this.handleError([]))
      );
  }

  getContactDetail(): Observable<Contact>{
    return this.http.get<Contact>(this.urldetail, httpOptions).pipe(
      tap(() => console.info('Detailed Contact Obtained')),
      map(res => new CustomResponseDetail().deserialize(res).results),
      catchError(this.handleError(new Contact()))
    );

  }



  // getUser(): Observable<User[]> {
  //   return this.http.get('/api/user')
  //     .map((res: Response) => res.json().response.map((user: User) => new User().deserialize(user)));
  // }



  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
