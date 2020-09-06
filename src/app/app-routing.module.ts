import { RegisterComponent } from './register/register.component';
import { MyauctionsComponent } from './myauctions/myauctions.component';
import { AuthGuard } from './_helpers/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuctionDetailsComponent } from './auction-details/auction-details.component';
import { AuctionsComponent } from './auctions/auctions.component';

const routes: Routes = [
  { path: '', redirectTo: "auctions", pathMatch: "full" },

  { path: "auctions", component: AuctionsComponent },
  { path: "myauctions", component: MyauctionsComponent, canActivate: [AuthGuard] },
  { path: "auction/:id", component: AuctionDetailsComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
