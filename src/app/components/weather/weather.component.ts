import { Component, OnInit, Input } from '@angular/core';

import { WeatherApiService, Weather } from '../../services/weather-api.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html'
})

export class WeatherComponent implements OnInit {

  public weather: Weather | null;

  constructor(
    private weatherapiService: WeatherApiService,
   ) { }

  ngOnInit() {
    this.getWeatherDetails()
  }

  getWeatherDetails() {
    return this.weatherapiService.getWeatherDetails()
              .subscribe(data => {
                this.weather = data.json().weather[0];
                console.log("In weather-component: ", this.weather.description)
    })
  }
  // @Input() weather: Weather | null;
  // weather$: Observable<Weather>;
  // subscriptionWeather: Subscription;
  //
  //
  // constructor( private weatherapiService: WeatherApiService ) { }
  //
  // ngOnInit() {
  //   this.getWeatherDetails();
  //   console.log("in ngOnInit: ", this.weather)
  // }
  //
  //
  // getWeatherDetails(): void {
  //   this.weather$ = this.weatherCall();
  //   this.weather$.subscribe(data => {
  //     this.weather = data;
  //     console.log("data in weather.component: ", data)
  //   });
  // }
  //
  // weatherCall(): Observable<Weather> {
  //   return this.weatherapiService.getWeatherDetails();
  // }




}
