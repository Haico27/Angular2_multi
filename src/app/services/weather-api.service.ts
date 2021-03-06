import { Injectable, Inject, Input, forwardRef } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TemperatureScale } from '../components/weather-current-temperature/weather-current-temperature.component';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


@Injectable()

export class WeatherApiService {


  constructor(
    private http: Http,
    @Inject('WEATHER_CONFIG') public apiConfig: WeatherApiConfig
  ) { }

  currentWeather(
    queryParams: WeatherQueryParams
  ): Observable<CurrentWeather> {
    console.log("mapCurrentWeatherResponse:  ", this.callApi(queryParams, '/weather').map(this.mapCurrentWeatherResponse.bind(this)) );
    return this.callApi(queryParams, '/weather').map(this.mapCurrentWeatherResponse.bind(this));
  }

  protected callApi(
    queryParams: WeatherQueryParams,
    endpoint: string
  ): Observable<any> {

    const params = this.mapQueryParams(queryParams)
    console.log("params in callApi function in weather-api: ", params)
    console.log("endpoint in callApi function in weather-api: ", endpoint)
    const requestOptions = this.getRequestOptions(params);
    console.log("requestOptions in callApi: ", requestOptions.params)
    const apiCall: Observable<any> =
        this.http.get(`${this.apiConfig.baseUrl}/${endpoint}`, requestOptions)
                  .map(response =>  response.json())
                  .filter(el => !!el)
    console.log("get-request in callApi function: ", apiCall)

    return apiCall;
  }

  private getRequestOptions(queryParams: object) {
    return new RequestOptions({
      headers: new Headers(),
      params: this.getQueryParams(queryParams)
    })
  }

  private getQueryParams(obj: { [key: string ]: any }): URLSearchParams {
    const queryParams = new URLSearchParams();
    queryParams.set(this.setTokenKey(), this.apiConfig.key);
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        queryParams.set(key.toString(), obj[key]);
      }
    }
    console.log("queryParams in getQueryParams-function: ", queryParams)
    console.log("this.apiConfig.key: ", this.apiConfig.key)
    return queryParams;
  }

  private setTokenKey(): string {
    return 'APPID'
  }

  protected mapQueryParams(
    params: WeatherQueryParams
  ): OpenWeatherMapLocationRequest {
    const mapped: OpenWeatherMapLocationRequest = {
      q: params.locationName,
      units: params.units ? this.mapUnits(params.units) : undefined
    }
    console.log("mapped in mapQueryParams function: ", mapped)
    return mapped;
  }

  protected mapCurrentWeatherResponse(
    response: OpenWeatherMapCurrentWeatherResponse
  ): CurrentWeather {
    if (!response) {
      return <CurrentWeather>{}
    }
    const weather: CurrentWeather = {
      location: response.name,
      description: response.weather[0].description,
      iconUrl: this.mapResponseToIconUrl(response),
      temp: response.main.temp
    };
    console.log("weather in mapCurrentWeatherResponse function: ", weather)
    return weather;
  }

  protected mapResponseToIconUrl(
    response: OpenWeatherMapCurrentWeatherResponse
  ): string {
    return `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
  }

  private mapUnits(unit: TemperatureScale) {
    switch(unit) {
      case TemperatureScale.CELSIUS:
        return 'metric';
      case TemperatureScale.FAHRENHEIT:
        return 'imperial';
      case TemperatureScale.KELVIN:
        return;
      default:
        return 'metric';
    }
  }
}

export interface CurrentWeather {
  description?: string;
  location?: string;
  iconUrl?: string;
  temp?: number;
}

//OpenWeatherMapRequest
export interface WeatherQueryParams {
  locationName?:string;
  units?: TemperatureScale;
}

export interface OpenWeatherMapLocationRequest {
  q?: string;
  units?: 'imperial' | 'metric' ;
}

export interface OpenWeatherMapCurrentWeatherResponse {
  coord: { lon: number; lat: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
}

export class WeatherApiConfig {
  key = '2b8db39adb44b11721c508294db0b312';
  baseUrl = 'http://api.openweathermap.org/data/2.5';
}
