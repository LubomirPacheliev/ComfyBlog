import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GetPostsService } from '../user/services/get-post/get-posts.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthorGuard implements CanActivate {
  constructor(public auth: AngularFireAuth, public getPostService: GetPostsService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = route.params.id;
      return this.getPostService.getSinglePost(id).toPromise().then(res => {
        const post: any = res.data();
        return this.auth.currentUser.then(res => {
          if (post.user == res?.email) {
            return true;
          } else {
            this.router.navigate(['posts', id]);
            return false;
          }
        });
      });
  }
  
}
