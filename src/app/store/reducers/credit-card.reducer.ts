import { CreditCardAction, CreditCardActionTypes } from './../actions/credit-card.actions';
import { CreditCardInfo } from './../models/credit-card-info.model';

const initialState: Array<CreditCardInfo> = [
  {
    id: '1324s-gdhdhjsj-yyey',
    creditCardNumber: 123456789012,
    cardHolder: 'Chukwuka Chidera',
    expirationDate: '03/24',
    securityCode: 123,
    amount: 30000

  }
];

export function CreditCardReducer(state: Array<CreditCardInfo> = initialState, action: CreditCardAction) {
  switch (action.type) {
    case CreditCardActionTypes.ADD_CREDIT_CARD:
      return [...state, action.payload]
    default:
      return state;
  }
}
