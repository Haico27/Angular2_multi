import { Component, OnInit, Input } from '@angular/core';

import { WeatherApiService } from '../../services/weather-api.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html'
})

export class WeatherComponent implements OnInit {
  @Input() description: string;

  constructor( private weatherapiService: WeatherApiService ) { }

  getWeatherDetails() {
    this.weatherapiService.getWeatherDetails().toPromise().then(response => console.log("in weathercomponent, data isn't transmitted to here though yet: ", response));
  }

  ngOnInit(): any {
    this.getWeatherDetails()
  }


}
