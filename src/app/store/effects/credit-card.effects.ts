import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  LoadCreditCardAction, CreditCardActionTypes, LoadCreditCardSuccessAction,
  LoadCreditCardFailureAction, AddCreditCardAction, AddCreditCardFailureAction, AddCreditCardSuccessAction
} from './../actions/credit-card.actions';
import { PaymentService } from './../../services/payment.service';
import { of } from 'rxjs';


@Injectable()
export class CreditCardEffects {

  @Effect() addCreditCard$ = this.actions$
  .pipe(
    ofType<AddCreditCardAction>(CreditCardActionTypes.ADD_CREDIT_CARD),
    mergeMap(
      (data) => this.paymentService.addCreditCardInfo(data.payload)
        .pipe(
          map(() => new AddCreditCardSuccessAction(data.payload)),
          catchError(error => of(new AddCreditCardFailureAction(error)))
        )
    )
  )

  @Effect() loadCreditCard$ = this.actions$
    .pipe(
      ofType<LoadCreditCardAction>(CreditCardActionTypes.LOAD_CREDIT_CARD),
      mergeMap(
        () => this.paymentService.getCreditCardDetails()
          .pipe(
            map(data => {
              return new LoadCreditCardSuccessAction(data)
            }),
            catchError(error => of(new LoadCreditCardFailureAction(error)))
          )
      ),
    )




  constructor(private actions$: Actions, private paymentService: PaymentService) {}
}
