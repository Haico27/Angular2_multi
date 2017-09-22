import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DestinationsComponent } from './components/destinations/destinations.component';

import { destinationService } from './services/destination.service';
import { userService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';
import { AuthenticationService } from './services/authentication.service';

import { HomeComponent } from './components/home/home.component';
import { DestinationFormComponent } from './components/destination-form/destination-form.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    DestinationDetailComponent,
    HomeComponent,
    DestinationFormComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent
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
              userService,
              AlertService,
              AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
