import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


import { Destination } from '../models/destination';


//Decorator that tells TypeScript to emit metadata about the service
@Injectable()

export class DestinationService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private destinationsUrl = 'api/destinations'; //url to web-api




  constructor( private http: HttpClient) {

  }

  // GET destinations from the server
  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.destinationsUrl)
  }

  private handleError(error: any):
  Promise<any> {
    console.error('An error occurred', error)

    return Promise.reject(error.message || error)
  }

  getDestination(id: number): Observable<Destination> {
    const url = `${this.destinationsUrl}/${id}`
    return this.http.get<Destination>(url)
  }

  // getDestination(id: number): Promise<Destination> {
  //   return this.http.get(this.destinationsUrl)
  //     .toPromise()
  //     .then(
  //       (response: Response) => //console.log(response.json())
  //       // response.json().find(destination => destination.id === id)
  //       console.log("response in getDestination(id: number) ", response)
  //     )
  //   .catch(this.handleError);
  // }

  create(model: Destination): Observable<Destination> {
    console.log("function in destinationService is activated. Model: ", model)
    return this.http.post<Destination>('api/destination', JSON.stringify(model), { headers: this.headers} )

  }
}
