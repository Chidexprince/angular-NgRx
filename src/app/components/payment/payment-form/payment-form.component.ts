import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCardInfo } from '../../../store/models/credit-card-info.model';
import { AppState } from '../../../store/models/app-state.model';
import { AddCreditCardAction } from './../../../store/actions/credit-card.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  public creditCardDetails: Observable<Array<CreditCardInfo>>;
  public loading$: Observable<boolean>;
  public error$: Observable<Error>;
  public newCreditCardInfo: CreditCardInfo = {
    id: '', creditCardNumber: 0,
    cardHolder: '', expirationDate: '', securityCode: 0, amount: 0
  };

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

  }

  addCreditCardInfo() {
    this.newCreditCardInfo.id = uuid();

    this.store.dispatch(new AddCreditCardAction(this.newCreditCardInfo));

    this.newCreditCardInfo = { id: '', creditCardNumber: 0, cardHolder: '', expirationDate: '', securityCode: 0, amount: 0 };
  }

}
