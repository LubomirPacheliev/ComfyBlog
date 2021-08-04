import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CanActivateGuard } from './user/guards/can-activate.guard';
import { CreateComponent } from './user/posts/create/create.component';
import { PostdetailsComponent } from './user/posts/postdetails/postdetails.component';
import { PosteditComponent } from './user/posts/postedit/postedit.component';
import { PostsComponent } from './user/posts/posts.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
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
  },
  {
    path: 'profile',
    canActivate: [CanActivateGuard],
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
