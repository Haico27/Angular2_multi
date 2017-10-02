import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-current-description',
  templateUrl: './weather-current-description.component.html',
  styleUrls: ['./weather-current-description.component.css']
})
export class WeatherCurrentDescriptionComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
