##
Basically in order to communicate from child component to parent component.
##
Step 1: Child Component will be emitting the event like shown below.
```
            @Output() eventClicked = new EventEmitter();
            Here both the @Output() decorator and the EventEmitter are from class @angular/core.
```
##
Step 2: To observe the data being passed from the child to parent create a button and write a function which is fired on the button click like shown below.
```
              getData(){
                    this.eventClicked.emit(this.studentData); 
                    }
```
Step 3: Now the event is emitted by the child component which has to handled by the parent component , like shown below in the selector of the child component in the parent component Html
```
            <div class="container">
                <app-child (eventClicked)='handleEventClicked($event)'></app-child>
            </div>
        Here eventClicked is the output event emitted from the child component and handleEventClicked($event) will the method of the parent component to handle the data.
```

##
Step 4: Function for the parent component to handle the data emitted by child component is like below
```
             handleEventClicked(data){
                this.studentDataReceived=data;
                }
```