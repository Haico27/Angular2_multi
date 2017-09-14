import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DestinationsComponent }      from './destinations/destinations.component';
import { DestinationDetailComponent }  from './destination-detail/destination-detail.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DestinationDetailComponent },
  { path: 'destinations',     component: DestinationsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
