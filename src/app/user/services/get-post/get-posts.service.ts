import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


type PostsObsv = Observable<any[]>;

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {

  allPosts?: PostsObsv;
  allPostIds?: string[] = [];

  constructor(private firestore: AngularFirestore) { }

  getPosts(): PostsObsv | undefined {
   this.allPosts = this.firestore.collection('posts').valueChanges();

    this.firestore.collection('posts').get({}).subscribe(posts => {
      posts.docs.map(doc => this.allPostIds?.push(doc.id));
    });

    return this.allPosts;
  }

  getAllPostIds() {
    return this.allPostIds;
  }

  getSinglePost(id: string) {
    return this.firestore.collection('posts').doc<object>(id).get();
  }
}
