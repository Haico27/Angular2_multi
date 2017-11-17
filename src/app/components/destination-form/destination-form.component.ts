import { Component, Input } from '@angular/core';

import { Destination } from '../../models/destination';

import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'destination-form',
  templateUrl: './destination-form.component.html',
  styleUrls: ['./destination-form.component.css']
})
export class DestinationFormComponent {
  @Input('destinations') destinations: Destination[]
  //constructor that injects destinationService into the destinationService-property
  constructor( private destinationService: DestinationService) { }

  model = new Destination('', '', '');

  onSubmit(): void {
    this.destinationService.create(this.model as Destination)
        .subscribe(destination => {
          this.destinations.push(destination)
        })
  }



}
