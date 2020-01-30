import { Component, OnInit } from '@angular/core';
import { FakeServiceService } from '../fake-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-a',
  templateUrl: './route-a.component.html',
  styleUrls: ['./route-a.component.scss']
})
export class RouteAComponent implements OnInit {
  posts:any;
  constructor(private fakeService:FakeServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.posts = this.route.snapshot.data['posts'];
  }

}
