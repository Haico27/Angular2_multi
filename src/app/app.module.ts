import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DestinationsComponent } from './destinations/destinations/destinations.component';

import { destinationService } from './destinations/destination.service';
import { userService } from './users/user.service';
import { DestinationDetailComponent } from './destinations/destination-detail/destination-detail.component';

import { HomeComponent } from './home/home.component';
import { DestinationFormComponent } from './destinations/destination-form/destination-form.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    DestinationDetailComponent,
    HomeComponent,
    DestinationFormComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
              destinationService,
              userService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
