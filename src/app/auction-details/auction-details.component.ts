import { Route } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http';
import { Auction } from './../_models/Auction';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RouterModule, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.css']
})
export class AuctionDetailsComponent implements OnInit {
  auction: Auction;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.httpClient.get<Auction>(`${environment.apiUrl}/auctions/${params['id']}`).subscribe(x => {
        this.auction = x;
      });
    });
  }

  buy(){
    console.log(`Im buying item id=${this.auction.id}`);
  }

  imageFrom(img: string){
    if(!img){
      return `/assets/placeholder-avatar.jpg`;
    }
    return `data:image/png;base64,${img}`
  }
}
