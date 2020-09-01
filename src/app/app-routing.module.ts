import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuctionDetailsComponent } from './auction-details/auction-details.component';
import { AuctionsComponent } from './auctions/auctions.component';

const routes: Routes = [
  { path: "", redirectTo: "auctions", pathMatch: "full" },
  { path: "auctions", component: AuctionsComponent },
  { path: "auction/:id", component: AuctionDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
