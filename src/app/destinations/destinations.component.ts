import { Component, OnInit } from '@angular/core';

import { Destination } from '../destination'

import { DestinationsService } from '../destinations.service'

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})

export class DestinationsComponent implements OnInit  {
  destinations: Destination[];
  selectedDestination: Destination;

  //constructor that injects DestinationsService into the destinationsService-property
  constructor( private destinationsService: DestinationsService) { }

  getDestinations(): void {
    this.destinationsService.getDestinations().then(destinations => this.destinations = destinations);
  }

  ngOnInit(): void {
    this.getDestinations();
  }

  onSelect(destination: Destination): void {
    this.selectedDestination = destination;
  }

  add(name: string): void {
    console.log("this button should add the entered destination to the database");
    name = name.trim();
    this.destinationsService.create(name)
      .then(destination => { console.log(destination)})
  }

}
