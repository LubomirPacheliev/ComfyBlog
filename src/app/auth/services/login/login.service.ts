import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public fireauth: AngularFireAuth) { }

  login(user: {email?: string, password?: string, repassword?: string}) {
    if (user.email && user.password) this.fireauth.signInWithEmailAndPassword(user.email, user.password);
    // TODO: Fail notification
    // TODO: Navigate to posts page
  }
}
