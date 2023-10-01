import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user: User = new User('', '');
  message: any;

  constructor(private service: UserService) {}

  ngOnInit() {}

  public registerNow() {
    let resp = this.service.register(this.user);
    resp.subscribe((data) => (
      this.message = data.toString));
  }
}
