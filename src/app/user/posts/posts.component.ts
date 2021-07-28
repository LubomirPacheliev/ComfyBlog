import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{
  posts: Observable<any[]>;
  constructor(firestore: AngularFirestore) { 
    this.posts = firestore.collection('posts').valueChanges();
  }
}
