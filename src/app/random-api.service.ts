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

  /*
  Servicio que se encarga de hacer los request al API para obtener los datos necesarios
  */
  private url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb';
  private urldetail ='https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getContactsList (): Observable<Contact[]> {
    /*
    Pide al API la lista de contactos y devuelve un Observable de un arreglo de Contactos
    * */
    return this.http.get<Contact[]>(this.url, httpOptions)
      .pipe(
        tap(() => console.info('fetched contacts')),
        // A través de la deserializacion del JSON obtenido se crean los objetos
        // Custom Response es una clase que facilita el modelado de los datos recibidos y el matenimiento del codigo
        map(res => new CustomResponse().deserialize(res).results),
        catchError(this.handleError([]))
      );
  }

  getContactDetail(): Observable<Contact>{
    /*
    * Devuelve del API los datos detallados de un contacto aleatorio
    * */
    return this.http.get<Contact>(this.urldetail, httpOptions).pipe(
      tap(() => console.info('Detailed Contact Obtained')),
      // CustomResponseDetail, es una modificaicon de Custom Response para modelar los datos
      map(res => new CustomResponseDetail().deserialize(res).results),
      catchError(this.handleError(new Contact()))
    );

  }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
