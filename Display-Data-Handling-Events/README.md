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

