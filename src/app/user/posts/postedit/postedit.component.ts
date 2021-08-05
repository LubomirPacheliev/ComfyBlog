import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { GetPostsService } from '../../services/get-post/get-posts.service';
import { PostEditService } from '../../services/post-edit/post-edit.service';

@Component({
  selector: 'app-postedit',
  templateUrl: './postedit.component.html',
  styleUrls: ['./postedit.component.css']
})
export class PosteditComponent implements OnInit {

  id?: string; 

  constructor(
    public firestore: AngularFirestore,
    public route: ActivatedRoute,
    public editPost: PostEditService,
    public fireatuh: AngularFireAuth,
    public getPostService: GetPostsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param.id;

      this.getPostService.getSinglePost(this.id!).subscribe(post => {
        const postData: any = post.data();
        console.log(postData);
        document.querySelector('#title')!.innerHTML = postData.title
        document.querySelector('#content')!.innerHTML = postData.content;
      })
    });
  }

  edit() {
    let data: {};
    const [title, content]: (HTMLInputElement | null)[] = [
      document.querySelector('#title'),
      document.querySelector('#content')
    ];

    if (title?.value || content?.value) {
      content?.value 
        ? data = {title: title?.value, content: content.value}
        : data = {title: title?.value};
      this.editPost.update(this.id, data);
    }
  }

}
