import { Component, Input } from '@angular/core';


@Component({
  selector: 'weather-current-temperature',
  templateUrl: './weather-current-temperature.component.html',
  styleUrls: ['./weather-current-temperature.component.css']
})
export class WeatherCurrentTemperatureComponent {
  unitSymbol: string;
  @Input() temp: number;
  get deg(): TemperatureScale {
    console.log("get deg() function in weather current component: ", this._deg)
    return this._deg;
  }



  @Input()
  set deg(value: TemperatureScale) {
    this._deg = value;
    switch (value) {
      case TemperatureScale.CELSIUS:
        this.unitSymbol = 'C';
        break;
      case TemperatureScale.FAHRENHEIT:
        this.unitSymbol = 'F';
        break;
      case TemperatureScale.KELVIN:
        this.unitSymbol = 'K';
        break;
      default:
        this.unitSymbol = 'C';
    }
  }

  private _deg: TemperatureScale = TemperatureScale.CELSIUS;



}

export enum TemperatureScale {
  CELSIUS = <any>'celsius',
  KELVIN = <any>'kelvin',
  FAHRENHEIT = <any>'fahrenheit'
}
