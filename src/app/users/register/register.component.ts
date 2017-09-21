import { Component } from '@angular/core';
import { userService } from '../user.service'
import { User } from '../user'

@Component({
  selector: 'register-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: userService ) { }

  model = new User('', '', '', '');

  registerUser(): void {
    this.userService.create(this.model)
  }
}
