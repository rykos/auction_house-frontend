import { Observable } from 'rxjs';
import { User } from './../_models/User';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auction } from '@app/_models/Auction';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getDetails(): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUrl}/account/details`);
  }

  getMyBoughtAuctions(): Observable<Auction[]> {
    return this.httpClient.get<Auction[]>(`${environment.apiUrl}/auctions/my/bought`);
  }

  getMySoldAuctions() {
    return this.httpClient.get<Auction[]>(`${environment.apiUrl}/auctions/my/sold`)
  }
}
