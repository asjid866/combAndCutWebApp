import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'navbartop',
  templateUrl: './navbartop.component.html',
  styleUrls: ['./navbartop.component.css'],
})
export class NavbartopComponent {
  user;

  constructor(public auth: AuthService) {
    console.log('in nav constructor');
    this.user = this.auth.user.username;
    console.log(this.user);

  }

  logout() {
    console.log('in logout method');
    this.auth.logout();
    this.user = this.auth.user.username;
  }
}
