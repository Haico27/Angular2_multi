import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()

export class WeatherApiService {
  private baseUrl = 'http://api.openweathermap.org/data/2.5';

  constructor( private http: Http) { }

  getWeatherDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/weather?q=Berlin&appid=2b8db39adb44b11721c508294db0b312`)
        .map(response => console.log("response in weatherAPIService: ", response.json()));
  }

}
