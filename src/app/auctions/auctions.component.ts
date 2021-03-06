import { Auction } from './../_models/Auction';
import { map, catchError, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs';
import { IMG_UTILS } from '@app/_utils/image-utils';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: [
    './auctions.component.css',
  ]
})
export class AuctionsComponent implements OnInit {
  auctions: Auction[];
  currentId: number;
  imageFrom = IMG_UTILS.imageFrom;
  
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var id: number = +params['id'] - 1;
      var skip: number = id * 20;
      this.currentId = id;
      this.getAuctions(skip).subscribe(
        x => {
          this.auctions = x;
          console.log(this.auctions);
        },
        err => {
          this.auctions = [];
        }
      );
    });
  }

  timePassed(date: Date) {
    var date1: any = new Date(date);
    var date2: any = new Date();
    var minTimeDiff: any = Math.floor((date2 - date1) / (1000 * 60));
    if (minTimeDiff >= 1440) {//Days
      if (minTimeDiff >= 1440 * 2) {
        return `${minTimeDiff} days ago`;
      }
      else {
        return `${minTimeDiff} day ago`;
      }
    }
    else if (minTimeDiff >= 60) {//Hours
      var hours: any = Math.floor((date2 - date1) / (1000 * 3600));
      if (hours > 1) {
        return `${hours} hours ago`;
      }
      return `${hours} hour ago`;
    }
    else if (minTimeDiff >= 2) {//minutes
      return `${minTimeDiff} minutes ago`;
    }
    else {
      return 'just now';
    }
  }

  changePage(page: number) {
    this.route.params.subscribe(params => {
      var newId: number = this.currentId + page;
      if (newId < 0) {
        return;
      }
      var skip: number = newId * 20;
      this.getAuctions(skip).subscribe(
        x => {
          if (x.length > 0) {
            this.currentId = newId;
            this.auctions = x;
          }
        },
        err => {
          this.auctions = [];
        }
      );
    });
  }

  getAuctions(skip: number): Observable<Auction[]> {
    return this.httpClient.get<Auction[]>(`${environment.apiUrl}/auctions/${skip}/20`);
  }
}
