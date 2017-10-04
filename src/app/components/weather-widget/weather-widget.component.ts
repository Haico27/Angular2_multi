import { Component, OnInit, Input } from '@angular/core';

import { WeatherApiService, CurrentWeather, WeatherQueryParams } from '../../services/weather-api.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})

export class WeatherWidgetComponent implements OnInit {

  @Input() currentWeather: CurrentWeather | null;
  @Input('destination') locationName: string;

  constructor(
    private weatherapiService: WeatherApiService,
   ) { }

   ngOnInit() {
     this.getWeather()

   }

   getWeather(): void {
     this.currentWeatherCall().subscribe(data => this.currentWeather = data);
   }

   currentWeatherCall(): Observable<CurrentWeather> {
     const params: WeatherQueryParams = Object.assign({}, { locationName: this.locationName });
     console.log("in currentWeatherCall in weather-widget, locationName: ", this.locationName);
     console.log("currentWeatherCall function in weather-widget: ", params);
     return this.weatherapiService.currentWeather(params);
   }

}
