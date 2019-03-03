import { Component } from '@angular/core';
import {RandomApiService} from "./random-api.service";
import {Contact} from "./Models/contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndTuApplicacion';
  contacts: Contact[];
  constructor(private randomApiService: RandomApiService){}

  refreshList() {
      this.randomApiService.getContactsList()
        .subscribe(contacts => this.displayContacts(contacts))

  }

  private displayContacts(contacts: any) {
    this.contacts = contacts
  }
}

