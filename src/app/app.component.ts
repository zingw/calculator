import {Component} from '@angular/core';
import { Injectable} from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  suggest =  'Put Your Address Here';
  address = ' Hải Dương ';
  name = 'Đức';
  message = 'Change me by update text Box Below';
  timeData :any;
  SPACE = "--"
  x = '';
  toggle = true;
  clickToSeeHello(){
    alert('Hi my name is ' + this.name + " and I'm living in " + this.address )
  }

  onInput(event:Event) {
    console.log(event);
  }

  onChange(event: Event) {
    console.log(event);
  }

  constructor() {
  }

  getTime() {
    this.timeData = new Date();
  }

  showValue(): string {
   if(this.x === '1132') return 'You typed 1132 so you see this';
   else if(this.x.trim()=='') return 'You did  not type anything yet';
   else return 'You did not type correctly';
  }

  onToggle() {
    this.toggle = !this.toggle;
  }
}


