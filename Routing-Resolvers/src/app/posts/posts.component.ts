import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = this.route.snapshot.data['posts'];
  }

}
