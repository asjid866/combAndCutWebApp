import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendBookingEmailService {

  private SEND_EMAIL_LINK = "http://localhost:8000/combncut-send-booking-email";

  constructor(private httpClient: HttpClient) { }



  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }


  
  public sendBookingEmail(formData){
    // return this.httpClient.get(this.SEND_EMAIL_LINK);
  
    console.log("in post service");
    console.log(formData);
    
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(formData);
    console.log(body)
    return this.httpClient.post(this.SEND_EMAIL_LINK, body, { 'headers': headers })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  
    
   



    // CreateBug(data): Observable<Bug> {
    //   return this.http.post<Bug>(this.baseurl + '/bugtracking/', JSON.stringify(data), this.httpOptions)
    //   .pipe(
    //     retry(1),
    //     catchError(this.errorHandl)
    //   )
    // }  

    


    
  }



}
