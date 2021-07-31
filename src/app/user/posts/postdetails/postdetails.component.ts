import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GetPostsService } from '../../services/get-post/get-posts.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  post?: {title?: string, content?: string, user?: string};

  constructor(public getService: GetPostsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => { 
      this.getService.getSinglePost(param.id)
      .subscribe(post => {
       this.post = post.data()
      })
    });
    console.log(this.post)
  }
}
