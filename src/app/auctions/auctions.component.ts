import { Component, OnInit } from '@angular/core';
import { Auction } from '../Models/Auction';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: [
    './auctions.component.css',
    '../bootstrap/css/bootstrap.css'
  ]
})
export class AuctionsComponent implements OnInit {
  auctions: Auction[] = [
    { Id: 0, Title: "Aukcja", Price: 150, Description: "Opis aukcji" },
    { Id: 1, Title: "Aukcja", Price: 150, Description: "Opis aukcji" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
