import { Component, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GetPostsService } from '../services/get-post/get-posts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email?: string | null;
  posts?: {title: string, content: string, user: string}[];

  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore, public getService: GetPostsService) {}

  ngOnInit() {
    this.auth.currentUser.then(res => this.email = res?.email);
    this.getService.getPosts()?.subscribe(post => this.posts = post.filter(x => x.user === this.email));
  }
}
