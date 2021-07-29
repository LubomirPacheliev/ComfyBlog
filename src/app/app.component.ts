import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { LogoutService } from './auth/services/logout/logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userState: string | null | undefined;

  constructor(public activeRoute: ActivatedRoute, public logoutService: LogoutService, public fireauth: AngularFireAuth) {}

  ngOnInit() {
    this.fireauth.user.subscribe(observer => this.userState = observer?.email); //Check out fireauth.authstate
  }

  onClick() {
    this.logoutService.logout();
    this.fireauth.user.subscribe(observer => this.userState = observer?.email);
  }
}
