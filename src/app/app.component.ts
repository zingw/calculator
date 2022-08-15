import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  a = 0;
  b = 0;
  arr = ['Le','Viet','Duc'];

  onHandleClick(){
    alert('Hello' + ' ' + this.title);
  }

  onSumClick(){
    alert(this.a + this.b);
  }


}

