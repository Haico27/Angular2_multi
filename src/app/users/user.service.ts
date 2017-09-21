import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()

export class userService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private registerUrl = 'api/registerUser'; //url to web-api

  constructor( private http: Http) { }

  private handleError(error: any):
  Promise<any> {
    console.error('An error occurred', error)

    return Promise.reject(error.message || error)
  }

  create(model: {}): Promise<User> {
    console.log("create function in user.service. Model: ", model)
    return this.http.post('api/register', JSON.stringify(model), { headers: this.headers})
          .toPromise()
          .then(res => console.log(res))
          .catch(this.handleError);
  }

}
