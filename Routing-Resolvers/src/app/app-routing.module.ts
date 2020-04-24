import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostsResolverService } from './posts-resolver.service';
import { PostDetailsComponent } from './post-details/post-details.component';


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
