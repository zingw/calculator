import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arr1 = ['1','2','3','/', '4','5','6','*', '7','8','9','-', '0','.','=','+'];
  input = '';
  result = 0;
  INVALID_ERR = "INVALID_ERR"
  pressNum(number: string) {
    if(this.isValidToAdd(number)){
      this.input += number;
    }
    else alert(this.INVALID_ERR)
  }

  getResult(): number {
    this.result = 1231245121;
    return this.result;
  }

  isValidToAdd(x: string): boolean {
    // nếu input ban đầu rỗng thì cứ return true
    if(this.input==''){
      return true;
    }

    // Nếu lastChar là OP thì sau nó phải là 1 number
    if(this.isOperator(this.getLastInputChar()) && this.isNumber(x)){
      return true;
    }
    // Nếu lastChar là number thì sau nó có thể là 1 number hoặc OP
    if(this.isNumber(this.getLastInputChar())){
      return true;
    }
    else{
      alert(this.INVALID_ERR);
    }
    return false;
  }

  isValidToCalculate():boolean{
    if(this.isValidToAdd(this.input) && this.isNumber(this.getLastInputChar())){
      return true;
    }
    else{
      alert(this.INVALID_ERR)
    }
    return false;
  }

  isOperator(x: string): boolean {
    let arr = ['+', '-', '*', '/'];
    return arr.lastIndexOf(x) > -1 ? true : false;
  }

  isNumber(x: string): boolean {
    return !isNaN(Number(x));
  }

  getLastInputChar(): string {
    if(this.getLastInputChar() ==''){
      this.input = '0';
      return '0';
    }
    return this.input[this.input.length - 1];
  }

  remove() {
    this.input = this.input.substring(0, this.input.length - 1);
  }
}

