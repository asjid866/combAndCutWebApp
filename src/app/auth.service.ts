import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = {
    isloggedin: true,
    username: 'Asjid Yasin',
  };
  constructor(private router: Router, private route: ActivatedRoute) {}

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    localStorage.setItem('returnUrl', returnUrl);

    console.log('in login method in auth service');
    this.user.isloggedin = true;
    this.user.username = 'Asjid Yasin';

    // if authenticated
    returnUrl = localStorage.getItem('returnUrl');
    if (returnUrl != null) {
      this.router.navigateByUrl(returnUrl);
    }



  }

  logout() {
    console.log('in logout method in auth service');
    this.user.isloggedin = false;
    this.user.username = '';
    this.router.navigate(['/home']);
  }
}
