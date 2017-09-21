import { Component } from '@angular/core';
import { userService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: userService) { }

  model = new User('', '', '', '');

  logIn(): void {
    this.userService.login(this.model)
  }

}
