import { Component } from '@angular/core';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html'
})

export class WeatherComponent {
  public weather: Weather;

  constructor() {
    this.weather = { temp: "12", summary: "Cold", city: "Berlin"}
  }
}

interface Weather {
  temp: string;
  summary: string;
  city: string;
}
