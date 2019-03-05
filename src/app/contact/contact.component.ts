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
    // Solicita al servicio los datos provenientes del API
    this.randomApiService.getContactDetail()
      .subscribe(contact => this.displayContact(contact));
  }

  private displayContact(contact: Contact) {
    // Almacena los datos en una propieda de la clase
    // Aqui deberia codificarse todos los proceso necesarios para la presnetacion de los datos al usuario
    this.contact = contact;
  }
}
