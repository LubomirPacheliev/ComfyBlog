import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateComponent } from './user/posts/create/create.component';
import { PostdetailsComponent } from './user/posts/postdetails/postdetails.component';
import { PosteditComponent } from './user/posts/postedit/postedit.component';
import { PostsComponent } from './user/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/create',
    component: CreateComponent
  },
  {
    path: 'posts/:id',
    component: PostdetailsComponent
  },
  {
    path: 'posts/:id/edit',
    component: PosteditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
