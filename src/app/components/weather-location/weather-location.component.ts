import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.css']
})
export class WeatherLocationComponent implements OnInit {
  @Input() location: string;

  constructor() { }

  ngOnInit() {
  }

}
