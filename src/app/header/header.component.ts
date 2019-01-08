import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "Address Book"
  showForm = false;
  toggleForm(){
    this.showForm = !this.showForm;
  }
  constructor() { }

  ngOnInit() {
  }

}
