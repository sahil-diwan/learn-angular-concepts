##
Communicating with the child component.
##
Step 1: Declare the child component selector in the parent component html.
##
Step 2: Now in order to access the parent component data that is available in the parent component ts file has to used in the child component selector like below explained.
```
            <app-child [childData]="child"></app-child>
            Here child refers to the variable in the parent component ts file.
            Here childData refers to the variable in the child component ts file which will accept data from the parent component.
```
#
Step 3: Now in the child component ts file
```
            @Input() childData; 
            This @Input() which is available in @angular/core field available in the child component will accept data.
```