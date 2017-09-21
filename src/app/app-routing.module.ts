import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DestinationsComponent }      from './destinations/destinations/destinations.component';
import { DestinationDetailComponent }  from './destinations/destination-detail/destination-detail.component';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'destination/:id', component: DestinationDetailComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
