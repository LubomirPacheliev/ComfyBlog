import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { PostEditService } from '../../services/post-edit/post-edit.service';

@Component({
  selector: 'app-postedit',
  templateUrl: './postedit.component.html',
  styleUrls: ['./postedit.component.css']
})
export class PosteditComponent {

  constructor(public firestore: AngularFirestore, public route: ActivatedRoute, public editPost: PostEditService, public fireatuh: AngularFireAuth) { }

  edit() {
    let id: string; 
    let data: {};
    const [title, content]: (HTMLInputElement | null)[] = [
      document.querySelector('#title'),
      document.querySelector('#content')
    ];

    this.route.params.subscribe(param => {
      if (title?.value || content?.value) {
        content?.value 
        ? data = {title: title?.value, content: content.value}
        : data = {title: title?.value};
        id = param.id;
        this.editPost.update(id, data);
      }
    });
  }

}
