import { Contact } from './Contact';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts:Contact[] = [new Contact(1,'naveen','naveenraj@gmail.com',9533466343,0o242424,'naveen.com','vanasthalipuram,Hyderabad'),
              new Contact(2,'raj','raj@gmail.com',934476343,258424,'raj.com','panama,Hyderabad'),
            ]
  constructor(private router:Router) { }
  getContacts(){
    return this.contacts;
  }
  add(Contact: Contact){
    console.log(Contact);
    this.contacts.push(Contact);
    this.router.navigate(['/index'])
    console.log(this.contacts.length);
  }
  delete(contact: Contact){
   const index = this.contacts.indexOf(contact);
    this.contacts.splice(index,1);
  }
  getContact(id:number){
   return this.contacts.find(x=>x.id == id);
  }
}
