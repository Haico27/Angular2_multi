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

  getDestinations() {
    this.destinationService.getDestinations().subscribe(destinations => this.destinations = destinations);
  }

  ngOnInit() {
    this.getDestinations();
  }

  onSelect(destination: Destination): void {
    this.selectedDestination = destination;
  }

}
