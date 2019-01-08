import { Contact } from './../Contact';
import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  constructor(public service: ContactService) {
    
   }
   
   public get contacts() : Contact[] {
     return this.service.getContacts();
   }
   onSelect(contact: Contact){
     this.selectedContact = contact;
   }
   
  ngOnInit() {
  }

}
