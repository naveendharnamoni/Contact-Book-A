import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AppComponent } from './app.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/index', pathMatch:'full'},
  {path:'index',component:ContactsComponent},
  {path:'create', component: CreateFormComponent},
  { path: 'detail/:id', component: ContactDetailsComponent   },
  {path:'edit/:id', component: CreateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
