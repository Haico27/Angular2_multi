import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { DestinationsService } from '../destinations.service';

import { Destination } from '../destination';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css']
})

export class DestinationDetailComponent implements OnInit {
  constructor(
    private destinationsService: DestinationsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
      this.destinationsService.getDestination(+params.get('id')))
      .subscribe(destination => this.destination = destination)
  }

  goBack(): void {
    this.location.back();
  }

  @Input() destination: Destination;
}
