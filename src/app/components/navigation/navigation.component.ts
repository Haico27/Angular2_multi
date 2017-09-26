import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

    constructor(
      private authenticationService: AuthenticationService,
      private alertService: AlertService
    ) {

      //when the app refreshes or gets initialized
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'))

      //subscribe to changes in currentUser; navbar adapts immediately to the status of the currentUser
      authenticationService.getCurrentUser.subscribe(currentUser => this.currentUserDetails(currentUser))
    }

    private currentUserDetails(currentUser) {
      this.currentUser = currentUser
    }

    logout() {
      this.authenticationService.logout();
      this.alertService.warning("You logged out", false)
    }
}
