import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCardInfo } from '../../../store/models/credit-card-info.model';
import { AppState } from '../../../store/models/app-state.model';
import { AddCreditCardAction } from './../../../store/actions/credit-card.actions';
import { v4 as uuid } from 'uuid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  public creditCardDetails: Observable<Array<CreditCardInfo>>;
  public loading$: Observable<boolean>;
  public error$: Observable<Error>;
  public paymentForm: FormGroup;
  public displayMessage: string;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.paymentForm = this.formBuilder.group({
      id: [uuid()],
      cardHolder: ['', [Validators.required,Validators.minLength(1),Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      creditCardNumber: ['', [Validators.required, Validators.minLength(16), Validators.min(1111111111111111),
      Validators.max(9999999999999999)]],
      expirationMonth: ['', [Validators.required,Validators.minLength(1),Validators.maxLength(2),Validators.min(1),Validators.max(12)]],
      expirationYear: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(2),Validators.min(11),Validators.max(99)]],
      securityCode: ['', [Validators.required, Validators.minLength(3),
                          Validators.maxLength(3), Validators.min(111), Validators.max(999)]],
      amount: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(9)]]
    });
  }

   // convenience getter for easy access to form fields
  get f() { return this.paymentForm.controls; }

  addCreditCardInfo() {

    this.store.dispatch(new AddCreditCardAction(this.paymentForm.value));

    this.paymentForm.reset();

  }

}
