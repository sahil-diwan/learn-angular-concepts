import { Injectable } from '@angular/core';
import { PostsService } from './posts.service';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsResolverService implements Resolve<any>{

  constructor(private postsService : PostsService) { }

  resolve(){
    return this.postsService.getPosts();
  }
}
