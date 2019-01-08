import { ContactService } from './contact.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ContactService]
})
export class AppComponent {
  title = 'AddressBookAngular';
  /**
   *
   */
  constructor(contactService : ContactService) {
    
  }
}
