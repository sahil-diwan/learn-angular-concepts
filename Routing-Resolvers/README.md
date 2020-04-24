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
