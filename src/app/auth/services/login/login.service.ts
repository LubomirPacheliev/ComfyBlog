import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public fireauth: AngularFireAuth, public router: Router) { }

  login(user: {email?: string, password?: string}) {
    if (user.email && user.password) {
      this.fireauth.signInWithEmailAndPassword(user.email, user.password);
      this.router.navigate(['/posts']);
    }
    // TODO: Fail notification
  }
}
