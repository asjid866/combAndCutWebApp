import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbartopComponent } from './navbartop/navbartop.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminAllBookingsComponent } from './admin/admin-all-bookings/admin-all-bookings.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'admin/adminLogin', component: AdminLoginComponent },
  { path: 'admin/adminHome', component: AdminHomeComponent, canActivate: [AuthGuardService] },
  { path: 'admin/allBookings', component: AdminAllBookingsComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
