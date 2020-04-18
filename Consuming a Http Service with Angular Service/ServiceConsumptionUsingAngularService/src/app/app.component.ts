import { Component } from '@angular/core';
import { ConsumptionService } from './consumption.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts:any;
  title = 'ServiceConsumptionUsingAngularService';

  constructor(consumptionService:ConsumptionService){
      consumptionService.getPosts().subscribe(response=>this.posts=response);;
  }
}
