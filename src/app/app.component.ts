import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input = '';

  getAlert() {
    alert("haha")
  }

  pressNum(s: string) {
    this.input+= s;
  }
}

