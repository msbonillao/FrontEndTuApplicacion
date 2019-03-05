import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {ContactListComponent} from "./contact-list/contact-list.component";


/*
* Modulo encargado del ruteo y nacegacion a traves de lso componenets de hechos en Angular
* */
const routes: Routes = [
  { path: 'list', component: ContactListComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' } //Redireccion por defecto
  ];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
