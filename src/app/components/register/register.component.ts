import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';
import { User } from '../../models/user';


@Component({
  selector: 'register-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService ) { }

  model: any = {};
  loading = false;

  registerUser(): void {
    this.loading = true;
    this.userService.create(this.model)
        .subscribe(
          data => {
            //set success message and pass true parameter to persist the message after redirecting to the login page;
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/login']);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          }
        )
  }
}
