import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FakeServiceService } from './fake-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<any> {

  constructor(private fakeService:FakeServiceService) { }

  resolve(){
    return this.fakeService.getPosts();
  }
}
