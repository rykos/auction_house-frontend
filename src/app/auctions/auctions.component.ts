import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Auction } from '../_models/Auction';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: [
    './auctions.component.css',
  ]
})
export class AuctionsComponent implements OnInit {
  auctions: Auction[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Auction[]>(`${environment.apiUrl}/auctions`).subscribe(x => this.auctions = x)
  }

}
