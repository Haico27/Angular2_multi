import { Component } from '@angular/core';

import { Destination } from '../destination';

import { DestinationsService } from '../destinations.service'

@Component({
  selector: 'app-destination-form',
  templateUrl: './destination-form.component.html',
  styleUrls: ['./destination-form.component.css']
})
export class DestinationFormComponent {

  //constructor that injects DestinationsService into the destinationsService-property
  constructor( private destinationsService: DestinationsService) { }

  model = new Destination('', '');

  submitted = false;

  onSubmit(): void {
    console.log("onSubmit() function in destination-form component activated! Data: ", this.model)
    console.log('this.model', this.model.name, this.model.country);
    this.destinationsService.create(this.model)
        .then(destination => console.log(destination))


  }

}
