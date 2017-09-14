import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DestinationsComponent }      from './destinations/destinations.component';
//import { DestinationDetailComponent }  from './destinations/destination-detail.component';

const routes: Routes = [
  //{ path: 'detail/:id', component: DestinationDetailComponent },
  { path: 'destinations',     component: DestinationsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
