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
