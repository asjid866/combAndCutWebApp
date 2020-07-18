import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


import { NavbartopComponent } from './navbartop/navbartop.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminAllBookingsComponent } from './admin/admin-all-bookings/admin-all-bookings.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { PicGridComponent } from './pic-grid/pic-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbartopComponent,
    HomeComponent,
    AboutComponent,
    BookingComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminAllBookingsComponent,
    HomeCarouselComponent,
    FooterComponent,
    PicGridComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
