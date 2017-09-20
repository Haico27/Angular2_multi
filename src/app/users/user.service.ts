import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()

export class userService {

  create(model: {}): Promise<User> {
    console.log("create function in user.service. Model: ", model)
    return ;
  }

}
