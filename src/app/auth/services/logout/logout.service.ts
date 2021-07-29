import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(public fireauth: AngularFireAuth, public router: Router) { }
  
  logout() {
    from(this.fireauth.signOut()).subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
