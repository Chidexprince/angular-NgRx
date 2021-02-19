import { CreditCardInfo } from './credit-card-info.model';

export interface AppState {
  readonly creditCard: Array<CreditCardInfo>;
}
