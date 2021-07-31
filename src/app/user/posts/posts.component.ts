import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPostsService } from '../services/get-post/get-posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Observable<any[]> | undefined;

  constructor(public getPostService: GetPostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.posts = this.getPostService.getPosts();
  }
}
