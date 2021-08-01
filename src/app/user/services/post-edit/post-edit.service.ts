import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostEditService {

  constructor(public firestore: AngularFirestore, public router: Router) { }

  update(id: string, changes: {}) {
    this.firestore.collection('posts').doc(id).update(changes).then(() => {
      this.router.navigate([`posts/${id}`]);
    });
  }
}
