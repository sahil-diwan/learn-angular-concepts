import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FakeServiceService implements OnInit{

  constructor(private http:HttpClient) {
    console.log("Called Constructor");
   }

  ngOnInit(){
    console.log("Called NgOnInit");
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id:number){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}
