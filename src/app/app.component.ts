import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userState: string | null | undefined;

  constructor(public authService: AuthService, public fireauth: AngularFireAuth) {}

  ngOnInit() {
    this.fireauth.user.subscribe(observer => this.userState = observer?.email); //Check out fireauth.authstate
  }

  onClick() {
    this.authService.logout();
    this.fireauth.user.subscribe(observer => this.userState = observer?.email);
  }
}
