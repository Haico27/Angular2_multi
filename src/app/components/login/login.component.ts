import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';
import { User } from '../../models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router,

  ) { }

  model: any = {};
  loading = false;
  returnUrl: string;

  ngOnInit() {
    //reset loginstatus before logging in
    this.authenticationService.logout();

    //default returnUrl to '/'
    this.returnUrl = '/';
  }

  logIn() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
        .then(
          data => { this.router.navigate([this.returnUrl]) }
        )
  }

}
