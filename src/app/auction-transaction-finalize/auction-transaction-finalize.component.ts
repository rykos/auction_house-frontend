import { User } from './../_models/User';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auction } from '@app/_models/Auction';
import { IMG_UTILS } from '@app/_utils/image-utils';

@Component({
  selector: 'app-auction-transaction-finalize',
  templateUrl: './auction-transaction-finalize.component.html',
  styleUrls: ['./auction-transaction-finalize.component.css']
})
export class AuctionTransactionFinalizeComponent implements OnInit {
  auction: Auction;
  user: User;
  imageFrom = IMG_UTILS.imageFrom;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        this.httpClient.get<User>(`${environment.apiUrl}/account/details`).subscribe(x => { this.user = x }, (err) => { return null; });
        this.httpClient.get<Auction>(`${environment.apiUrl}/auctions/${params['id']}`).subscribe(x => this.auction = x);
      }
    );
  }

  ngOnInit(): void {

  }

}
