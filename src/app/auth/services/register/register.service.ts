import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(public fireauth: AngularFireAuth) {}

  register(user: {email?: string, password?: string, repassword?: string}) {
    if (user.password === user.repassword) {
      if (user.email && user.password) this.fireauth.createUserWithEmailAndPassword(user.email, user.password);
    } else {
      // TODO: Add notification or something
    }
    // TODO: Navigate to posts page
  }
}
