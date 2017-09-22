import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authenticationService: AuthenticationService) { }

  model: any = {};

  logIn(): void {
    this.authenticationService.login(this.model.email, this.model.password);
  }

}
