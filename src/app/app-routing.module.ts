import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {ContactListComponent} from "./contact-list/contact-list.component";

const routes: Routes = [
  { path: 'list', component: ContactListComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
  ];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
