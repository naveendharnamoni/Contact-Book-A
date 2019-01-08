import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Contact } from '../Contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  static count = 5;
  contact : Contact;
  
  signupfrm : FormGroup ;

  public get Count() : number {
    return CreateFormComponent.count;
  }
  
  public set Count(v : number) {
    CreateFormComponent.count = v;
  }
  
  constructor( private route: ActivatedRoute,private service: ContactService,private router: Router) { }

  ngOnInit() {
      this.loadContact(+this.route.snapshot.paramMap.get('id'));
      this.route.params.subscribe(routeParams => {
        this.loadContact(routeParams.id);
      });
    }
    loadContact(id){
      this.contact =this.service.getContact(id);
    }
  createContact(form){
    console.log(form);
      if(this.contact == null){
        this.service.add(new Contact(
          CreateFormComponent.count+=1,
          form.value.name,
          form.value.email,
          form.value.mobile,
          form.value.landline,
          form.value.website,
          form.value.address
        ));
      }else{
        this.contact.name = form.value.name,
        this.contact.email = form.value.email,
        this.contact.mobile = form.value.mobile,
        this.contact.landline = form.value.landline,
        this.contact.website = form.value.website,
        this.contact.address = form.value.address
        this.router.navigate(['/index']);
      }
    console.log(CreateFormComponent.count);
  }
}
