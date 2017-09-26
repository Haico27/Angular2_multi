import { Component, OnInit } from '@angular/core';

import { Destination } from '../../models/destination';

import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})

export class DestinationsComponent implements OnInit  {
  title = "Add your favourite destinations here!";
  destinations: Destination[];
  selectedDestination: Destination;

  //constructor that injects destinationService into the destinationService-property
  constructor( private destinationService: DestinationService) { }

  getDestinations(): void {
    this.destinationService.getDestinations().then(destinations => this.destinations = destinations);
  }

  ngOnInit(): void {
    this.getDestinations();
  }

  onSelect(destination: Destination): void {
    this.selectedDestination = destination;
  }

}
