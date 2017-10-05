import { Component, OnInit, Input } from '@angular/core';

import { WeatherApiService, CurrentWeather, WeatherQueryParams } from '../../services/weather-api.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { TemperatureScale } from '../weather-current-temperature/weather-current-temperature.component';


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
  @Input() units: TemperatureScale;




  constructor(
    private weatherapiService: WeatherApiService,
   ) { }

   ngOnInit() {
     this.getWeather()

   }

   getWeather(): void {
     this.currentWeatherCall().subscribe(data => this.currentWeather = data);
   }

   //calls the currentWeather function in the weatherapiService with the location of the destination as params
   currentWeatherCall(): Observable<CurrentWeather> {
     const params: WeatherQueryParams = Object.assign({}, { locationName: this.locationName }, { units: TemperatureScale.CELSIUS} );
     console.log("in currentWeatherCall in weather-widget, locationName: ", this.locationName, TemperatureScale.CELSIUS);
     console.log("currentWeatherCall function in weather-widget: ", params);

     return this.weatherapiService.currentWeather(params);
   }
}

export class WeatherSettings {
  scale: TemperatureScale = TemperatureScale.CELSIUS;
}
