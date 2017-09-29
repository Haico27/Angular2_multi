import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { DestinationService } from '../../services/destination.service';

import { Destination } from '../../models/destination';




@Component({
  selector: 'destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css']
})

export class DestinationDetailComponent implements OnInit {

  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
      this.destinationService.getDestination(+params.get('id')))
      .subscribe(destination => this.destination = destination)
  }

  goBack(): void {
    this.location.back();
  }

  @Input() destination: Destination;
}
