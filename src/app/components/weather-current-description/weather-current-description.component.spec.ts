import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCurrentDescriptionComponent } from './weather-current-description.component';

describe('WeatherCurrentDescriptionComponent', () => {
  let component: WeatherCurrentDescriptionComponent;
  let fixture: ComponentFixture<WeatherCurrentDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCurrentDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCurrentDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
