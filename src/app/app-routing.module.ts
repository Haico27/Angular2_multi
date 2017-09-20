import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DestinationsComponent }      from './destinations/destinations/destinations.component';
import { DestinationDetailComponent }  from './destinations/destination-detail/destination-detail.component';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'destination/:id', component: DestinationDetailComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'register', component: UsersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
