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
  isShow = true;
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
    // gán giờ hiện tại cho biến time
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let sec = date.getSeconds();
    let milisecs =  date.getMilliseconds()

    this.timeData = date;
    console.log("Time generate Success!!!")
  }

  showvalue(): string {
   return  this.x==='1132' ? ' This is content when you write 1132 on the box' : this.x;
  }

  fncIsShow(b: boolean) {
    this.isShow = !b;
  }
}


