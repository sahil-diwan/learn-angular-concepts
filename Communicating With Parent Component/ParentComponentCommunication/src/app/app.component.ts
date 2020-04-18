import { Component } from '@angular/core';
import { Student } from './models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ParentComponentCommunication';
  studentDataReceived: Student[];
  handleEventClicked(data){
    this.studentDataReceived=data;
  }
}
