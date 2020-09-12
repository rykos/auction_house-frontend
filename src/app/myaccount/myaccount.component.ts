import { Auction } from './../_models/Auction';
import { AuthenticationService } from '@app/_services/authentication.service';
import { User } from './../_models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  user: User;
  boughtActions: Auction[];
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.updateUserInfo().subscribe(x => {
      console.log(x);
    });
    this.authenticationService.currentUser.subscribe(x => this.user = x);
    //
    this.authenticationService.addBalance().subscribe(
      res => {
        console.log("Finished with");
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
