import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Project-Node-Mock-Server';
  posts:any;
  constructor(private postService:PostsService){
    this.postService.getPosts().subscribe(res=>this.posts=res);
  }

}
