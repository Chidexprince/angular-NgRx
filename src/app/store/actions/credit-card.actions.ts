import { Action } from '@ngrx/store';
import { CreditCardInfo } from './../models/credit-card-info.model';

export enum CreditCardActionTypes {
  ADD_CREDIT_CARD = '[CREDITCARD] Add Credit Card'
}

export class AddCreditCardAction implements Action {
  readonly type = CreditCardActionTypes.ADD_CREDIT_CARD;

 constructor(public payload: CreditCardInfo ) {}
}

export type CreditCardAction = AddCreditCardAction;
