# DisplayDataHandlingEvents

## 1.Property Binding
```
HTML
<div>
    <h2>1.Property Binding</h2>
    <button [disabled]="buttonDisabled">Save</button>
  </div>
TS
      buttonDisabled=false;
```
## 2.Attribute Binding
```
HTML
<div>
    <h2>2.Attribute Binding</h2>
    <table>
      <tr>
        <td [attr.colspan]="colspan">This is Column 1</td>
      </tr>
    </table>
  </div>
TS
      colspan="2";
```

## 3.Class Binding
```
HTML
<div>
    <h2>3.Class Binding</h2>
    <button class="btn btn-primary" [class.isActive]="isActive">Save</button>
  </div>
TS
     isActive=true;
```


## 4.Style Binding
```
HTML
<div>
    <h2>4.Style Binding</h2>
    <button [style.background]="isStyleActive?'blue':'white'" >Save</button>
  </div>
TS
    isStyleActive=true;
```



## 5.Event Binding
```
HTML
<div>
    <h2>5.Event Binding</h2>
    <p>My name is {{name}}</p>
    <button (click)="updateName()">Update Button</button>
  </div>
TS
      name='Peter';
  updateName(){
    this.name='John';
  }
```

## 6.Event Binding With Event Bubbling
```
HTML
<div>
    <h2>6.Event Binding With Event Bubbling</h2>
    <div (click)="divClicked()">
    <button (click)="onSave($event)">Save</button>
    </div>
  </div>
TS
divClicked(){
    console.log("Div is clicked");
  }

  onSave($event){
    console.log('Event is logged',event);
  }
```
## 7.Event Binding Without Event Bubbling
```
HTML
<div>
    <h2>7.Event Binding Without Event Bubbling</h2>
    <div (click)="divClicked1()">
    <button (click)="onSave1($event)">Save</button>
    </div>
  </div>
TS

  divClicked1(){
    console.log("Div is clicked");
  }

  onSave1($event){
    $event.stopPropagation();
    console.log('Event is logged',event);
  }
```

## 8.Event Filtering
```
HTML
 <div>
    <h2>8.Event Filtering</h2>
    <input (keyup.enter)="onKeyUp()"/>
  </div>
TS
 onKeyUp(){
    console.log("Enter was pressed");
  }

```

## 9.Template Variables
```
HTML
<div>
    <h2>9.Template Variables</h2>
    <input #email (keyup.enter)="onKeyUp1(email.value)"/>
  </div>
TS
onKeyUp1(email){
    console.log("Enter was pressed",email);
  }

```
