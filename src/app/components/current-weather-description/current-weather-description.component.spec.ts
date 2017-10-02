import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherDescriptionComponent } from './current-weather-description.component';

describe('CurrentWeatherDescriptionComponent', () => {
  let component: CurrentWeatherDescriptionComponent;
  let fixture: ComponentFixture<CurrentWeatherDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
