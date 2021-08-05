import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostEditService {

  constructor(public firestore: AngularFirestore, public router: Router) { }

  update(id: string | undefined, changes: {}) {
    if (id) {
      this.firestore.collection('posts').doc(id).update(changes).then(() => {
        this.router.navigate([`posts/${id}`]);
      });
    }
  }
}
