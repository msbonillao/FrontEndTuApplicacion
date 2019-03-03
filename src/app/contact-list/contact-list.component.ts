import { Component, OnInit } from '@angular/core';
import {Contact} from "../Models/contact";
import {RandomApiService} from "../random-api.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private randomApiService: RandomApiService) { }

  ngOnInit() {
    this.refreshList()
  }

  refreshList() {
    this.randomApiService.getContactsList()
      .subscribe(contacts => this.displayContacts(contacts))

  }

  private displayContacts(contacts: any) {
    this.contacts = contacts
  }
}
