import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'current-weather-description',
  templateUrl: './current-weather-description.component.html',
  styleUrls: ['./current-weather-description.component.css']
})
export class CurrentWeatherDescriptionComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
