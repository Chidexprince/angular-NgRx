import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CreditCardInfo } from '../store/models/credit-card-info.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  getCreditCardDetails() {
    const url = environment.baseUrl + '/creditCardDetails';

    return this.httpClient.get<any>(url)
      .pipe(catchError(this.errorHandler));
  }

  addCreditCardInfo(creditCard: CreditCardInfo) {
    const url = environment.baseUrl + '/creditCardDetails';

    return this.httpClient.post<any>(url, creditCard)
      .pipe(catchError(this.errorHandler));
  }

  getOneCreditCardById(cardId: string) {
    const url = environment.baseUrl + '/creditCardDetails/' + cardId;

    return this.httpClient.get<any>(url)
    .pipe(catchError(this.errorHandler));
  }

   // Error Handler
   errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
