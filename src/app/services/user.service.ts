import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map'

import { User } from '../models/user';

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


  create(user: User): any {
    return this.http.post('api/register', JSON.stringify(user), { headers: this.headers } )
  }

  login(model: {}): Promise<User> {
    console.log("login function in user.service. Model: ", model)
    return this.http.post('api/login', JSON.stringify(model), { headers: this.headers})
          .toPromise()
          .then(response =>
            response.json().length > 0 ?
            console.log("login successfull!") :
            console.log("login failed"))
          .catch(this.handleError);
  }

}
