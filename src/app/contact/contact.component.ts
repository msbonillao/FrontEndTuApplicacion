import { Component, OnInit } from '@angular/core';
import {RandomApiService} from "../random-api.service";
import {Contact} from "../Models/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  constructor(private randomApiService:RandomApiService) { }

  ngOnInit() {
    this.refreshContact();
  }

  refreshContact(){
    this.randomApiService.getContactDetail()
      .subscribe(contact => this.displayContact(contact));

  }

  private displayContact(contact: Contact) {
    this.contact = contact;

  }
}
