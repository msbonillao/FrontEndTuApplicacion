import { Component, OnInit } from '@angular/core';
import {Contact} from "../Models/contact";
import {RandomApiService} from "../random-api.service";
import * as _ from 'lodash';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  contactsPerLetter: Array<{letter: string, contacts: Contact[]}>;
  constructor(private randomApiService: RandomApiService) { }

  ngOnInit() {
    this.refreshList()
  }

  refreshList() {
    // Solicita al servicio los datos provenientes del API
    this.randomApiService.getContactsList()
      .subscribe(contacts => this.displayContacts(contacts));
  }

  private displayContacts(contactList: Contact[]) {
    //Tratamiento de datos para presentación al usuario
    // El arreglo se organiza alfabéticamente
    contactList.sort(function(a,b){
      return a.first.localeCompare(b.first);
    });
    // Se agrupan en arreglos de acuerdo a la letra inicial de su nombre (Puede cambiar a cualquier cualidad)
    let groupedItems: Array<Contact[]> = _.groupBy(contactList, 'first[0]');
    // Se convierte en un iterable para que los binding en la plantilla (*ngFor) operen sin problemas
    this.contactsPerLetter= Object.keys(groupedItems).map((key)=>{ return {letter:key, contacts:groupedItems[key]}});
    this.contacts = contactList;
  }
}
