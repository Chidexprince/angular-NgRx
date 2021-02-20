import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { LoadCreditCardAction, CreditCardActionTypes, LoadCreditCardSuccessAction } from './../actions/credit-card.actions';
import { PaymentService } from './../../services/payment.service';


@Injectable()
export class CreditCardEffects {



  constructor(private actions$: Actions, private paymentService: PaymentService) {}
}
