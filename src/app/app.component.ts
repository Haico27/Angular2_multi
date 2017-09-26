import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription: Subscription;
  currentUser = JSON.parse(localStorage.getItem('currentUser'))

    constructor(
      private authenticationService: AuthenticationService,
      private alertService: AlertService
    ) {
      console.log("currentUser in Appcomponent: ", this.currentUser)


      //when the app refreshes or gets initialized
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'))


    }

    logout() {
      this.authenticationService.logout();
      this.alertService.success("You logged out", true)
    }


}
