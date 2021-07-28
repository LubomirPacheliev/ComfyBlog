import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(public fireauth: AngularFireAuth) {}

  register(user: {username: string, password: string, repassword: string}) {

  }
}
