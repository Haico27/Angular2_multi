import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCurrentTemperatureComponent } from './weather-current-temperature.component';

describe('WeatherCurrentTemperatureComponent', () => {
  let component: WeatherCurrentTemperatureComponent;
  let fixture: ComponentFixture<WeatherCurrentTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCurrentTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCurrentTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
