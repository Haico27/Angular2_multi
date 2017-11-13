import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Destination } from '../models/destination';


//Decorator that tells TypeScript to emit metadata about the service
@Injectable()

export class DestinationService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private destinationsUrl = 'api/destinations'; //url to web-api

  constructor( private http: Http) { }

  getDestinations(): Observable<Destination[]> {
    return this.http.get(this.destinationsUrl)
    .map((response: Response) => response.json())
  }

  private handleError(error: any):
  Promise<any> {
    console.error('An error occurred', error)

    return Promise.reject(error.message || error)
  }

  getDestination(id: number): Promise<Destination> {
    return this.http.get(this.destinationsUrl)
      .toPromise()
      .then((response: Response) => //console.log(response.json())
        response.json().find(destination => destination.id === id))
    .catch(this.handleError);
  }

  create(model: {}): Promise<Destination> {
    console.log("function in destinationService is activated. Model: ", model)
    return this.http.post('api/destination', JSON.stringify(model), { headers: this.headers} )
            .toPromise()
            .then(res => console.log(res))
            .catch(this.handleError);
  }
}
