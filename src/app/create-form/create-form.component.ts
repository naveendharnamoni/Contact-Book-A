import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Form, FormControl, Validators} from '@angular/forms'
import { Contact } from '../Contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  static count = 3;
  contact : Contact;

  constructor( private route: ActivatedRoute,private service: ContactService,private router: Router) { }

  ngOnInit() {
    this.loadContact(+this.route.snapshot.paramMap.get('id'));
    this.route.params.subscribe(routeParams => {
    this.loadContact(routeParams.id);
    this.setEditFormData();
    });
  }
  get name() {
    return this.signupForm.get('name');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get mobile() {
    return this.signupForm.get('mobile');
  }
  get landline() {
    return this.signupForm.get('landline');
  }
  get website() {
    return this.signupForm.get('website');
  }
  get address() {
    return this.signupForm.get('address');
  }
  public get Count() : number {
    return CreateFormComponent.count;
  }
  public set Count(v : number) {
    CreateFormComponent.count = v;
  }
  
  loadContact(id){
    this.contact =this.service.getContact(id);
    console.log(this.contact);
  }
  setEditFormData(){
    this.name.setValue(this.contact.name);
    this.email.setValue(this.contact.email);
    this.mobile.setValue(this.contact.mobile);
    this.landline.setValue(this.contact.landline);
    this.website.setValue(this.contact.website);
    this.address.setValue(this.contact.address);
  }

  signupForm = new FormGroup({
    name : new FormControl('',Validators.required,),
    email : new FormControl('',[Validators.required,Validators.email]),
     mobile : new FormControl('',[Validators.required,Validators.minLength(10)]),
     landline : new FormControl('',Validators.required),
     website : new FormControl('',Validators.required),
     address : new FormControl('',Validators.required)
    }) ;

  createContact(){
    console.log(this.signupForm);
      if(this.contact == null){
        this.service.add(new Contact(
          CreateFormComponent.count+=1,
          this.signupForm.value.name,
          this.signupForm.value.email,
          this.signupForm.value.mobile,
          this.signupForm.value.landline,
          this.signupForm.value.website,
          this.signupForm.value.address
        ));
      }else{
        this.contact.name = this.signupForm.value.name,
        this.contact.email = this.signupForm.value.email,
        this.contact.mobile = this.signupForm.value.mobile,
        this.contact.landline = this.signupForm.value.landline,
        this.contact.website = this.signupForm.value.website,
        this.contact.address = this.signupForm.value.address
        this.router.navigate(['/index']);
      }
    console.log(CreateFormComponent.count);
  }
}
