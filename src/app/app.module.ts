import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DestinationsComponent } from './components/destinations/destinations.component';

import { DestinationService } from './services/destination.service';
import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';
import { AuthenticationService } from './services/authentication.service';
import { ChatService } from './services/chat.service';

import { HomeComponent } from './components/home/home.component';
import { DestinationFormComponent } from './components/destination-form/destination-form.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { WeatherApiService, WeatherApiConfig } from './services/weather-api.service';
import { WeatherCurrentDescriptionComponent } from './components/weather-current-description/weather-current-description.component';
import { WeatherLocationComponent } from './components/weather-location/weather-location.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { WeatherCurrentTemperatureComponent } from './components/weather-current-temperature/weather-current-temperature.component';
import { ChatComponent } from './components/chat/chat.component';


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
    WeatherWidgetComponent,
    WeatherCurrentDescriptionComponent,
    WeatherLocationComponent,
    WeatherIconComponent,
    WeatherCurrentTemperatureComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
              DestinationService,
              UserService,
              AlertService,
              AuthenticationService,
              WeatherApiService,
              {
                provide: 'WEATHER_CONFIG',
                useClass: WeatherApiConfig
              },
              ChatService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
