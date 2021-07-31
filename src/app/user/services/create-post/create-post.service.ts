import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(public firestore: AngularFirestore) { }

  create(post: { title?: string, content?: string, user?: string | null}) {
    this.firestore.collection('posts').add(post);
  }
}
