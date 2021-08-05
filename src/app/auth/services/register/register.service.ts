import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(public fireauth: AngularFireAuth, public router: Router) {}

  register(user: {email?: string, password?: string, repassword?: string}) {

    function displayError(err: string): void {
      document.querySelector('.auth p')!.innerHTML = err;
      setTimeout(() => {
        document.querySelector('.auth p')!.innerHTML = '';
      }, 5000);
    }

    if (user.password == user.repassword) {
      if (user.email && user.password) {
        this.fireauth.createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          if (res.user) {
            this.router.navigate(['/posts']);
          }
        })
        .catch(err => {
          displayError(err);
        });
      } else {
        displayError('Error: Invalid data.');
      }
    } else {
      displayError('Error: Passwords do not match.');
    }
  }
}
