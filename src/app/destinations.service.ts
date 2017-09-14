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
                .then(response => response.json() as Destination[])
                .catch(this.handleError);
  }

  private handleError(error: any):
  Promise<any> {
    console.error('An error occurred', error)

    return Promise.reject(error.message || error)
  }

  getDestination(id: number): Promise<Destination> {
    const url = `${this.destinationsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Destination)
      .catch(this.handleError);
  }
}
