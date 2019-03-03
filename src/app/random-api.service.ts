import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {Contact} from './Models/contact'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {isNullOrUndefined} from "util";
import {CustomResponse} from "./Models/custom-response";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RandomApiService {
  private url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb';


  // URL to web api
  constructor(private http: HttpClient) { }


  getContactsList (): Observable<Contact[]> {
    // @ts-ignore
    return this.http.get<any[]>(this.url)
      .pipe(
        tap(_ => console.info('fetched contacts')),
        //map((res) => res = res.map((response: CustomResponse)=> new CustomResponse().deserialize(response))),
        map((res) => res = res.results[0].map((contact: Contact) =>  new Contact().deserialize(contact))),
        catchError(this.handleError('getContactsList', []))
      );
  }

  parse(a: any){
    var g = new CustomResponse().deserialize(a)
    var f = g
  }



  // getUser(): Observable<User[]> {
  //   return this.http.get('/api/user')
  //     .map((res: Response) => res.json().response.map((user: User) => new User().deserialize(user)));
  // }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
