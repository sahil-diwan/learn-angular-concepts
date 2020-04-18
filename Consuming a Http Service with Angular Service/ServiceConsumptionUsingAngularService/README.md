##
Basic Http Service Consumption
##
Step 1:
    We can consume a Http Service in the app.component.ts in the constructor add code like below
        ```
              constructor(private http:HttpClient){
                http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response=>console.log(this.posts=response));
                }
        ```
        Here HttpClient needs to be imported from 
            ```
                import { HttpClient } from '@angular/common/http';
            ```
##
Step 2:
    HttpClientModule needs to be added in to the app.module.ts
        ```
            import {  HttpClientModule } from '@angular/common/http'
        ```
