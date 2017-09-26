import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../models/user';

@Injectable()

export class UserService {
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


}
