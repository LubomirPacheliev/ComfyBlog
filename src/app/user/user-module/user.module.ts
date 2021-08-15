import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts.component';
import { CreateComponent } from '../posts/create/create.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PostdetailsComponent } from '../posts/postdetails/postdetails.component';
import { PosteditComponent } from '../posts/postedit/postedit.component';
import { ProfileComponent } from '../profile/profile.component';



@NgModule({
  declarations: [
    PostsComponent,
    CreateComponent,
    PostdetailsComponent,
    PosteditComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PostsComponent,
    CreateComponent,
    PostdetailsComponent,
    PosteditComponent,
    ProfileComponent
  ]
})
export class UserModule { }
