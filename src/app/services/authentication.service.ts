import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthenticationService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  login(email: string, password: string) {
    return this.http.post('api/authenticate', JSON.stringify({ email: email, password: password }), {headers: this.headers})
            .toPromise()
            .then(response => {
                //store the by the backend returned userdata in a variable
                let user = response.json();

                //if response.json contains data, put the returned userdata in localstorage
                if (response.json().length > 0) {
                    localStorage.setItem('currentUser', user);
                }

                console.log('currentUser in localStorage in AuthenticationService: ', localStorage);

                return user;

            })
  }
}
