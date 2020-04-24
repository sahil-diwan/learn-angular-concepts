# RoutingResolvers

## One way to deal with getting and displaying data from an API is to route a user to a component, and then in that component’s ngOnInit hook call a method in a service to get the necessary data. While getting the data, perhaps the component can show a loading indicator. There’s another way however using what’s known as a route resolver, which allows you to get data before navigating to the new route.

## App-routing.module.ts

```
  const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'posts',component:PostsComponent,resolve: { posts:PostsResolverService }},
  {path:'posts/:id',component:PostDetailsComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

```

## Posts-resolver.service.ts

```
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

```

## Posts.service.ts

```
  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  constructor(private http:HttpClient) { 
    
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(delay(10000));
  }

  getPost(id:number){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}

```

## Posts.component.ts

```
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
```

## Posts-details.component.ts

```
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

```
