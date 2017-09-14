import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Destination } from './destination';


//Decorator that tells TypeScript to emit metadata about the service
@Injectable()

export class DestinationsService {
  private destinationsUrl = 'api/destinations'; //url to web-api

  constructor( private http: Http) { }

  getDestinations(): Promise<Destination[]> {
    return this.http.get(this.destinationsUrl)
                .toPromise()
                .then(response => response.json() as Destination[]
              )
                .catch(this.handleError);
  }

  private handleError(error: any):
  Promise<any> {
    console.error('An error occurred', error)

    return Promise.reject(error.message || error)
  }

  getDestination(id: number): Promise<Destination> {
    return this.http.get(this.destinationsUrl)
      .toPromise()
      .then(response => //console.log(response.json())
        response.json().find(destination => destination.id === id)
    )
      .catch(this.handleError);
  }
}
