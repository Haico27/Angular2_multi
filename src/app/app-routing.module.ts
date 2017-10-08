import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DestinationsComponent }      from './components/destinations/destinations.component';
import { DestinationDetailComponent }  from './components/destination-detail/destination-detail.component';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'destination/:id', component: DestinationDetailComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
