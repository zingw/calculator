import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arr1 = ['1','2','3','/', '4','5','6','*', '7','8','9','-', '0','.','=','+'];
  tables : Tables[] = [
    {col1:'7',col2:'8',col3:'9',col4:'/'},
    {col1:'4',col2:'5',col3:'6',col4:'x'},
    {col1:'1',col2:'2',col3:'3',col4:'-'},
    {col1:'0',col2:'.',col3:'C',col4:'+'},
  ];
}

