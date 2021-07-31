import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetPostsService } from '../services/get-post/get-posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Observable<any[]> | undefined;

  constructor(public getPostService: GetPostsService, public router: Router) { }

  ngOnInit() {
    this.getPosts();
  }

  navigateToPostDetails() {
    this.router.navigate([`posts/:id`]);
  }

  getPosts() {
    this.posts = this.getPostService.getPosts();
  }
}
