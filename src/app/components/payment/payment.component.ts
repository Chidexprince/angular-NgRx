import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCardInfo } from '../../store/models/credit-card-info.model';
import { AppState } from '../../store/models/app-state.model';
import { LoadCreditCardAction } from './../../store/actions/credit-card.actions';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public creditCardDetails: Observable<Array<CreditCardInfo>>;
  public loading$: Observable<boolean>;
  public error$: Observable<Error>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.creditCardDetails = this.store.select(store => store.creditCard.list);
    this.loading$ = this.store.select(store => store.creditCard.loading);
    this.error$ = this.store.select(store => store.creditCard.error);

    this.store.dispatch(new LoadCreditCardAction());
  }

}
