import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCardInfo } from 'src/app/store/models/credit-card-info.model';
import { AppState } from '../../store/models/app-state.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  creditCard$: Observable<Array<CreditCardInfo>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.creditCard$ = this.store.select(store => store.creditCard);
  }

}
