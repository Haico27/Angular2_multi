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

  image: FileList;

  submitted = false;

  onSubmit(): void {
    console.log("onSubmit() function in destination-form component activated! Data: ", this.model)
    console.log('this.model', this.model.name, this.model.country, this.model.imageUrl);
    this.destinationService.create(this.model as Destination)
        .subscribe(destination => {
          console.log("in submitform: ", destination)
          console.log("destinations in submitform: ", this.destinations)
          this.destinations.push(destination)
        })
  }

  onChange(event) {
    this.image = event.target.files;
    console.log(this.image)
  }

}
