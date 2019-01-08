import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './../contact.service';
import { Contact } from './../Contact';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact : Contact;
  constructor(private service:ContactService,private route:ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
    this.loadContact(+this.route.snapshot.paramMap.get('id'));
    this.route.params.subscribe(routeParams => {
      this.loadContact(routeParams.id);
    });
  }
  loadContact(id){
    this.contact =this.service.getContact(id);
  }
  deleteContact(){
    if(confirm("Do you want to delete?")){
      this.service.delete(this.contact);
      this.router.navigate(['/index']);
    }
  }

}
