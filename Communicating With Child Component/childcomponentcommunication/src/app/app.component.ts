import { Component } from '@angular/core';
import { Child } from './models/child.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'childcomponentcommunication';
  child:Child[];
  constructor(){
    this.child=[
              {cid:101,cname:"Sahil Diwan",cphone:9108290271},
              {cid:102,cname:"Tarun Diwan",cphone:9108290271},
              {cid:103,cname:"Sunil Diwan",cphone:9108290271},
              {cid:104,cname:"Himanshu Diwan",cphone:9108290271},
              {cid:105,cname:"Bharat Diwan",cphone:9108290271},
            ];
  }
}
