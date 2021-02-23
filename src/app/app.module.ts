import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentFormComponent } from './components/payment/payment-form/payment-form.component';
import { StoreModule } from '@ngrx/store';
import { CreditCardReducer } from './store/reducers/credit-card.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CreditCardEffects } from './store/effects/credit-card.effects';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([CreditCardEffects]),
    StoreModule.forRoot({
      creditCard: CreditCardReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
