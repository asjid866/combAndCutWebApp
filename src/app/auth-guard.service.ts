import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { stat } from 'fs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route, state:RouterStateSnapshot) {
    if (this.auth.user.isloggedin) {
      return true;
    } else {
      this.router.navigate(['/home'], {queryParams: {returnUrl: state.url}} );
      return false;
    }
  }

}
