import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ClientComponent } from './component/client/client.component';

export const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'contact', component:ContactComponent },
  { path:'client', component:ClientComponent }

];
