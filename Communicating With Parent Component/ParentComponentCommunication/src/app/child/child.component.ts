import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() eventClicked = new EventEmitter();
  studentData:Student[];
  constructor() {
    this.studentData=[
                        {sid:101,sname:"Sahil Diwan",sphone:9108290271},
                        {sid:102,sname:"Tarun Diwan",sphone:9108290271},
                        {sid:103,sname:"Sunil Diwan",sphone:9108290271},
                        {sid:104,sname:"Himanshu Diwan",sphone:9108290271},
                        {sid:105,sname:"Bharat Diwan",sphone:9108290271},
                      ]
    
   }

   getData(){
    this.eventClicked.emit(this.studentData);
   }

  ngOnInit() {
  }

}
