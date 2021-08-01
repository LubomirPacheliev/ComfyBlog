import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeletePostService {

  constructor(public firestore: AngularFirestore, public route: ActivatedRoute, public router: Router) { }

  delete(id?: string) {
    this.firestore.collection('posts').doc(id).delete().then(() => this.router.navigate([`posts`]));
  };
}
