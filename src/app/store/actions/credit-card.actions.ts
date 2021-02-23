import { Action } from '@ngrx/store';
import { CreditCardInfo } from './../models/credit-card-info.model';

export enum CreditCardActionTypes {
  LOAD_CREDIT_CARD = '[CREDITCARD] Load Credit Card',
  LOAD_CREDIT_CARD_SUCCESS = '[CREDITCARD] Load Credit Card Success',
  LOAD_CREDIT_CARD_FAILURE = '[CREDITCARD] Load Credit Card Failure',
  ADD_CREDIT_CARD = '[CREDITCARD] Add Credit Card',
  ADD_CREDIT_CARD_SUCCESS = '[CREDITCARD] Add Credit Card Success',
  ADD_CREDIT_CARD_FAILURE = '[CREDITCARD] Add Credit Card Failure'
}

export class LoadCreditCardAction implements Action {
  readonly type = CreditCardActionTypes.LOAD_CREDIT_CARD;

}

export class LoadCreditCardSuccessAction implements Action {
  readonly type = CreditCardActionTypes.LOAD_CREDIT_CARD_SUCCESS;

 constructor(public payload: Array<CreditCardInfo>) {}
}

export class LoadCreditCardFailureAction implements Action {
  readonly type = CreditCardActionTypes.LOAD_CREDIT_CARD_FAILURE;

 constructor(public payload: Error) {}
}

export class AddCreditCardAction implements Action {
  readonly type = CreditCardActionTypes.ADD_CREDIT_CARD;

 constructor(public payload: CreditCardInfo ) {}
}

export class AddCreditCardSuccessAction implements Action {
  readonly type = CreditCardActionTypes.ADD_CREDIT_CARD_SUCCESS ;

 constructor(public payload: CreditCardInfo) {}
}

export class AddCreditCardFailureAction implements Action {
  readonly type = CreditCardActionTypes.ADD_CREDIT_CARD_FAILURE;

 constructor(public payload: Error ) {}
}

export type CreditCardAction =
  | AddCreditCardAction
  | AddCreditCardSuccessAction
  | AddCreditCardFailureAction
  | LoadCreditCardAction
  | LoadCreditCardSuccessAction
  | LoadCreditCardFailureAction;
