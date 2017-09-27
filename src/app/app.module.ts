import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DestinationsComponent } from './components/destinations/destinations.component';

import { DestinationService } from './services/destination.service';
import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';
import { AuthenticationService } from './services/authentication.service';

import { HomeComponent } from './components/home/home.component';
import { DestinationFormComponent } from './components/destination-form/destination-form.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherApiService } from './services/weather-api.service';


@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    DestinationDetailComponent,
    HomeComponent,
    DestinationFormComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    NavigationComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
              DestinationService,
              UserService,
              AlertService,
              AuthenticationService,
              WeatherApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
