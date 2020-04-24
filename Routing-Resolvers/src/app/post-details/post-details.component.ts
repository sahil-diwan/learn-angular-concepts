import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post:any;
  constructor(private postService:PostsService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.postService.getPost(this.route.snapshot.params['id']).subscribe(data=> this.post=data);
  }
}
