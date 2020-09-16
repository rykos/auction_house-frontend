import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { AppRoutingModule } from './app-routing.module';
import { AuctionDetailsComponent } from './auction-details/auction-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MyauctionsComponent } from './myauctions/myauctions.component';
import { RegisterComponent } from './register/register.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AuctionCreateComponent } from './auction-create/auction-create.component';
import { AuctionTransactionFinalizeComponent } from './auction-transaction-finalize/auction-transaction-finalize.component';
import { AuctionBarComponent } from './auction-bar/auction-bar.component';
import { IncreaseBalanceComponent } from './increase-balance/increase-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionsComponent,
    AuctionDetailsComponent,
    HomeComponent,
    LoginComponent,
    MyauctionsComponent,
    RegisterComponent,
    MyaccountComponent,
    AuctionCreateComponent,
    AuctionTransactionFinalizeComponent,
    AuctionBarComponent,
    IncreaseBalanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
