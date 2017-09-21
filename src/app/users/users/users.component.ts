import { Component } from '@angular/core';
import { userService } from '../user.service'
import { User } from '../user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private userService: userService ) { }

  model = new User('', '', '', '');

  registerUser(): void {
    this.userService.create(this.model)
  }
}
