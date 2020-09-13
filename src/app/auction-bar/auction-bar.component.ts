import { first } from 'rxjs/operators';
import { Auction } from './../_models/Auction';
import { Component, OnInit, Input } from '@angular/core';
import { IMG_UTILS } from '@app/_utils/image-utils';

@Component({
  selector: 'app-auction-bar',
  templateUrl: './auction-bar.component.html',
  styleUrls: ['./auction-bar.component.css']
})
export class AuctionBarComponent implements OnInit {
  imageFrom = IMG_UTILS.imageFrom;

  @Input()
  auction: Auction;
  
  constructor() { }

  ngOnInit(): void {
  }

}
