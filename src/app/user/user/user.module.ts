import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts.component';
import { CreateComponent } from '../posts/create/create.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    PostsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PostsComponent,
    CreateComponent
  ]
})
export class UserModule { }
