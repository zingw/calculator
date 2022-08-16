import {Component} from '@angular/core';


export interface Row {
  col1: string ;
  col2: string ;
  col3: string ;
  col4: string ;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
input = '';
result = 0;
INVALID_ERR = "INVALID_ERR";

rows : Row[] = [
    {col1:'7',col2:'8',col3:'9',col4:'/'},
    {col1:'4',col2:'5',col3:'6',col4:'x'},
    {col1:'1',col2:'2',col3:'3',col4:'-'},
    {col1:'0',col2:'.',col3:'C',col4:'+'},
  ];

}




