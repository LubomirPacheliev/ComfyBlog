import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {

  constructor() { }

  createPost() {
    const [title, content]: (HTMLInputElement | HTMLTextAreaElement | null)[] = [
      document.querySelector('#title'),
      document.querySelector('#content')
    ];

    const post = {
      title: title?.value,
      content: content?.value
    }
  }
}
