import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public router: Router,
    public fireauth: AngularFireAuth
  ) { }

  displayError(err: string): void {
    document.querySelector('.auth p')!.innerHTML = err;
    setTimeout(() => {
      document.querySelector('.auth p')!.innerHTML = '';
    }, 5000);
  }

  login(user: {email?: string, password?: string}) {
    if (user.email && user.password) {
      this.fireauth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        if (res.user) this.router.navigate(['/posts']);
      }).catch(err => this.displayError(err));
    }
  }

  register(user: {email?: string, password?: string, repassword?: string}) {
    if (user.password == user.repassword) {
      if (user.email && user.password) {
        this.fireauth.createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          if (res.user) this.router.navigate(['/posts']);
        })
        .catch(err => this.displayError(err));
      } else {
        this.displayError('Error: Invalid data.');
      }
    } else {
      this.displayError('Error: Passwords do not match.');
    }
  }

  logout() {
    from(this.fireauth.signOut()).subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
