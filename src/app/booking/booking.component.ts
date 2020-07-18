import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SendBookingEmailService } from '../send-booking-email.service';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit{
  constructor(private router: Router, private sendBookingEmail: SendBookingEmailService) {
    window.scroll(0,0);
  }


  persons: number[] = [1];
  noOfPersons: number = 1;
  formdataObject;
  TotalPrice: number = 200;


  ngOnInit() {
  }











  opensweetalert() {
    Swal.fire({
      title: 'Confirm Your Booking',
      html:'<b>Total Price: Rs. '+ this.TotalPrice + '/- </b> ',
      text: "You won't be able to revert this!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Confirm it!',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Confirmed!', 'Our representative will contact you soon.', 'success');
        this.confirmedAppointment();
      }
    });
  }

  requiredFeildsSweetAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Form in not completely filled!',
      // footer: '<a href>Why do I have this issue?</a>'
    })
  }

  nothingSelectedSweetAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please select any service or pacakage!',
      // footer: '<a href>Why do I have this issue?</a>'
    })
  }

  onlyThreadingSweetAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Only Threading Selected! Threading can only be selected with some other service or pacakage',
      // footer: '<a href>Why do I have this issue?</a>'
    })
  }




 
  addperson(noOfPersonInserted) {
    this.persons = [1];
    this.noOfPersons = noOfPersonInserted;
    for (let i = 0; i < this.noOfPersons - 1; i++) {
      this.persons.push(1);
    }
  }

  submit(formData) {
    this.TotalPrice = 0;

    this.formdataObject = formData.value;
    console.log(this.formdataObject);

    
    if (formData.valid) {
    
      for (let i = 1; i <= this.noOfPersons; i++) {

//                  Services   ------------------------------

        if (this.formdataObject["hairCut" + i]) {
          this.TotalPrice = this.TotalPrice + 700;
        }
        if (this.formdataObject["beardTrimming" + i]) {
          this.TotalPrice = this.TotalPrice + 500;
        }
        if (this.formdataObject["shave" + i]) {
          console.log("shave "+ i + " : " + "500" )
          this.TotalPrice = this.TotalPrice + 500;
        }
        if (this.formdataObject["hairColor" + i]) {
          console.log("hairColor "+ i + " : " + "800" )
          this.TotalPrice = this.TotalPrice + 800;
        }
        if (this.formdataObject["hairPolish" + i]) {
          console.log("hairPolish "+ i + " : " + "800" )
          this.TotalPrice = this.TotalPrice + 800;
        }
        if (this.formdataObject["facial" + i]) {
          console.log("facial "+ i + " : " + "1200" )

          this.TotalPrice = this.TotalPrice + 1200;
        }
        if (this.formdataObject["threading" + i]) {
          console.log("threading "+ i + " : " + "200" )
          this.TotalPrice = this.TotalPrice + 200;
        }
        if (this.formdataObject["hairPolishAndStyling" + i]) {
          console.log("hairPolishAndStyling "+ i + " : " + "600" )
          this.TotalPrice = this.TotalPrice + 600;
        }

//                  Pacakages   ------------------------------

        if (this.formdataObject["hairCuttingBeardTrimmingOrShave" + i]) {
          console.log("hairCuttingBeardTrimmingOrShave "+ i + " : " + "1000" )
          this.TotalPrice = this.TotalPrice + 1000;
        }
        if (this.formdataObject["hairCuttingHairColorBeardTrimmingOrShave" + i]) {
          console.log("hairCuttingHairColorBeardTrimmingOrShave "+ i + " : " + "1700" )
          this.TotalPrice = this.TotalPrice + 1700;
        }
        if (this.formdataObject["hairCuttingHairPolishBeardTrimmingOrShave" + i]) {
          console.log("hairCuttingHairPolishBeardTrimmingOrShave "+ i + " : " + "1700" )
          this.TotalPrice = this.TotalPrice + 1700;
        }
        if (this.formdataObject["hairCuttingHairColorHairPolishBeardTrimmingOrShave" + i]) {
          console.log("hairCuttingHairColorHairPolishBeardTrimmingOrShave "+ i + " : " + "2500" )

          this.TotalPrice = this.TotalPrice + 2500;
        }
        if (this.formdataObject["hairCuttingFacialThreadingBeardTrimmingOrShave" + i]) {
          console.log("hairCuttingFacialThreadingBeardTrimmingOrShave "+ i + " : " + "2000" )

          this.TotalPrice = this.TotalPrice + 2000;
        }
        if (this.formdataObject["hairCuttingStylingAndShampooBeardTrimmingOrShave" + i]) {
          console.log("hairCuttingStylingAndShampooBeardTrimmingOrShave "+ i + " : " + "1500" )

          this.TotalPrice = this.TotalPrice + 1500;
        }    
        if (this.formdataObject["groomPackage" + i]) {
          console.log("groomPackage "+ i + " : " + "15000" )
          this.TotalPrice = this.TotalPrice + 15000;
        }        
      }

      if (this.TotalPrice == 0) {
        this.nothingSelectedSweetAlert();
      }
      else if (this.TotalPrice == 200) {
        this.onlyThreadingSweetAlert();        
      }
      else {
        this.opensweetalert();
      }
    }
    else {
      this.requiredFeildsSweetAlert();
    }
  }

  confirmedAppointment() {
    this.formdataObject['TotalPrice'] = this.TotalPrice;
    this.sendBookingEmail.sendBookingEmail(this.formdataObject).subscribe((data: any[]) => {
      console.log(data);
    });  
    // this.router.navigate(['/home']);
  }

}
