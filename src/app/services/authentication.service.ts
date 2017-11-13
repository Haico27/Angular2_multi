import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthenticationService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  @Output() getCurrentUser: EventEmitter<any> = new EventEmitter();

  login(email: string, password: string) {
    return this.http.post('api/authenticate', JSON.stringify({ email: email, password: password }), {headers: this.headers})
            .toPromise()
            .then((response: Response) => {
                //store the by the backend returned userdata in a variable
                let user = JSON.stringify(response.json()[0])

                //if response.json contains data, put the returned userdata in localstorage
                if (response.json().length > 0) {
                    localStorage.setItem('currentUser', user);
                    this.getCurrentUser.emit(JSON.parse(localStorage.getItem('currentUser')));
                    console.log('localStorage in AuthenticationService: ', JSON.parse(localStorage.getItem('currentUser')).firstName);
                }



                return user;

            })

  }

  logout() {
    console.log("user logging out: ", JSON.parse(localStorage.getItem('currentUser')) )
    localStorage.removeItem('currentUser');
    this.getCurrentUser.emit(JSON.parse(localStorage.getItem('currentUser')))
  }
}
