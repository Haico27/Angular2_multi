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
  @Input('location') location: {};

  constructor(
    private weatherapiService: WeatherApiService,
   ) { }

   ngOnInit() {
     this.getWeather()

   }

   getWeather(): void {
     this.currentWeatherCall()
   }

   currentWeatherCall(): Observable<CurrentWeather> {
     const params: WeatherQueryParams = Object.assign({}, { locationName: 'Berlin' });
     console.log("currentWeatherCall function in weather-widget: ", params)
     return this.weatherapiService.getCurrentWeather(params);
   }

}
