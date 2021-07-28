import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{

  posts = [
    {user: 'tempUsr', content: 'tempusr content for testing purposes', title: 'title'},
    {user: 'tempUsr1', content: 'tempusr content for testing purposes', title: 'title'},
    {user: 'tempUsr2', content: 'tempusr content for testing purposes', title: 'title'},
    {user: 'tempUsr3', content: 'tempusr content for testing purposes', title: 'title'},
  ]

  constructor() { }
}
