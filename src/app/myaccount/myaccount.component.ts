import { Auction } from './../_models/Auction';
import { AuthenticationService } from '@app/_services/authentication.service';
import { User } from './../_models/User';
import { Component, OnInit, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import { AccountService } from '@app/_services/account.service';
import { IMG_UTILS } from '@app/_utils/image-utils';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  user: User;
  auctions: Auction[];
  activeTab = "bought";

  constructor(private authenticationService: AuthenticationService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.authenticationService.updateUserInfo().subscribe(x => {
      console.log(x);
    });
    this.authenticationService.currentUser.subscribe(x => this.user = x);

    this.accountService.getMyBoughtAuctions().subscribe(auctions => {
      this.auctions = auctions;
      console.log(auctions);
    });

    // this.authenticationService.addBalance().subscribe(
    //   res => {
    //     console.log("Finished with");
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

  switchTab(tab: string) {
    this.activeTab = tab;
    if (tab === 'bought') {
      this.accountService.getMyBoughtAuctions().subscribe(x => this.auctions = x);
    }
    else {
      this.accountService.getMySoldAuctions().subscribe(x => this.auctions = x);
    }
  }

}
