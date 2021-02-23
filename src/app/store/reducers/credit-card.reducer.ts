import { CreditCardAction, CreditCardActionTypes } from './../actions/credit-card.actions';
import { CreditCardInfo } from './../models/credit-card-info.model';

export interface CreditCardState {
  list: CreditCardInfo[],
  loading: boolean,
  error: Error
}

const initialState: CreditCardState = {
  list: [],
  loading: false,
  error: undefined
  }

export function CreditCardReducer(state: CreditCardState = initialState, action: CreditCardAction) {
  switch (action.type) {
    case CreditCardActionTypes.LOAD_CREDIT_CARD:
      return { ...state, loading: true };

    case CreditCardActionTypes.LOAD_CREDIT_CARD_SUCCESS:
      return { ...state, list: action.payload, loading: false };

    case CreditCardActionTypes.LOAD_CREDIT_CARD_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case CreditCardActionTypes.ADD_CREDIT_CARD:
      return { ...state, loading: true };

    case CreditCardActionTypes.ADD_CREDIT_CARD_SUCCESS:
      return {
        ...state,
          list: [...state.list, action.payload],
        loading: false
      };

    case CreditCardActionTypes.ADD_CREDIT_CARD_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
}
