import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Display-Data-Handling-Events';
  buttonDisabled=false;
  colspan="2";
  isActive=true;
  isStyleActive=true;

  name='Peter';
  updateName(){
    this.name='John';
  }

  divClicked(){
    console.log("Div is clicked");
  }

  onSave($event){
    console.log('Event is logged',event);
  }

  divClicked1(){
    console.log("Div is clicked");
  }

  onSave1($event){
    $event.stopPropagation();
    console.log('Event is logged',event);
  }

  onKeyUp(){
    console.log("Enter was pressed");
  }

  onKeyUp1(email){
    console.log("Enter was pressed",email);
  }
}
