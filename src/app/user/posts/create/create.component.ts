import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CreatePostService } from '../../services/create-post/create-post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {

  constructor(public createService: CreatePostService, public fbAuth: AngularFireAuth, public router: Router) { }

  createPost() {
    const [title, content]: (HTMLInputElement | HTMLTextAreaElement | null)[] = [
      document.querySelector('#title'),
      document.querySelector('#content')
    ];

    let user: string | null;

    this.fbAuth.user.subscribe(userData => {
      user = userData!.email;
      const post = {
        title: title?.value,
        content: content?.value,
        user: user
      }
  
      this.createService.create(post);
    });

    this.router.navigate(['posts']);
  }
}
