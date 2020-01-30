import { Component, OnInit } from '@angular/core';
import { FakeServiceService } from '../fake-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-b',
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.scss']
})
export class RouteBComponent implements OnInit {
  post:any;
  constructor(private fakeService:FakeServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.fakeService.getPost(this.route.snapshot.params['id']).subscribe(data=> this.post=data);
  }

}
