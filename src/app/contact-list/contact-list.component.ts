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
  contact: Contact;
  contactsPerLetter: Array<{letter: string, contacts: Contact[]}>;
  constructor(private randomApiService: RandomApiService) { }

  ngOnInit() {
    this.refreshList()
  }

  refreshList() {

    this.randomApiService.getContactsList()
      .subscribe(contacts => this.displayContacts(contacts));


  }

  private displayContacts(contactList: Contact[]) {

    contactList.sort(function(a,b){
      return a.first.localeCompare(b.first);
    });
    let groupedItems: Array<Contact[]> = _.groupBy(contactList, 'first[0]');
    //this.contactsPerLetter = groupedItems;
    this.contactsPerLetter= Object.keys(groupedItems).map((key)=>{ return {letter:key, contacts:groupedItems[key]}});
    this.contacts = contactList;





  }
}
