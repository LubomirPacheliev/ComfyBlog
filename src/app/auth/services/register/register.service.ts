import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(public fireauth: AngularFireAuth, public router: Router) {}

  register(user: {email?: string, password?: string, repassword?: string}) {
    if (user.password === user.repassword) {
      if (user.email && user.password) {
        this.fireauth.createUserWithEmailAndPassword(user.email, user.password);
        this.router.navigate(['posts']);
      }
    } else {
      // TODO: Add notification or something
    }
    // TODO: Navigate to posts page
  }
}
