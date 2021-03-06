import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { DeletePostService } from '../../services/delete-post/delete-post.service';
import { GetPostsService } from '../../services/get-post/get-posts.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  post?: {title?: string, content?: string, user?: string};
  postId?: string;
  currUser?: string | null;

  constructor(
    public getService: GetPostsService,
    public route: ActivatedRoute, 
    public router: Router, 
    public deleteService: DeletePostService,
    public auth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => { 
      this.postId = param.id;
      this.getService.getSinglePost(param.id)
      .subscribe(post => {
       this.post = post.data();
      });
    });

    this.auth.user.subscribe(user => this.currUser = user?.email)
  }

  navigateToPostEdit() {
    this.router.navigate([`posts/${this.postId}/edit`])
  }

  deletePost() {
    this.deleteService.delete(this.postId);
  }
}
