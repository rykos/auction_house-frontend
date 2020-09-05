import { AuthenticationService } from '@app/_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { User } from '@app/_models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(x => this.user = x);
  }

}
