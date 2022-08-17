import {Component} from '@angular/core';
import {evaluate, string} from "mathjs";

export interface Row {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  input = '0';
  result = '0';
  INVALID_ERROR = "INVALID_ERROR";
  MATH_ERROR = "MATH_ERROR";
  // @ts-ignore
  rows: Row[] = [
    {col1: '7', col2: '8', col3: '9', col4: '/'},
    {col1: '4', col2: '5', col3: '6', col4: '*'},
    {col1: '1', col2: '2', col3: '3', col4: '-'},
    {col1: '0', col2: '.', col3: 'C', col4: '+'},
  ];

  bindValueToInput(cellData: string) {
    if (this.isValidToAdd(cellData)) {
      this.input += cellData;
      return;
    }
    if (cellData == 'C') {
      this.input = '0';
      this.result = '0'
    }
  }

  isValidToAdd(cellData: string): boolean {
    /**
     * Kiểm tra chuỗi hiện tại:
     *
     *      Nếu '0' -> bỏ 0 và cho add + - num
     *                  và tối đa 1 số 0, sau đó phải là dot. rồi sau đó thì là số
     *      Nếu khác '0' -> kiểm tra kí tự cuôối
     *          Nếu là số
     *              kiểm tra có phải số thập phân hay ko ?
     *                  có : ->  add OP and num
     *                  không: -> cho add tất
     *          Nếu là OP hoặc dot : chỉ cho add số
     */
    let currInput = this.input;
    if(cellData == 'C'){
      return false;
    }

    if (currInput == '0') {
      if (this.isNumber(cellData) && cellData !== '0'  || (cellData == '+') || cellData == '-') {
        this.input = cellData;
        return false;
      }
    }
    if (currInput !== '') {
      if(cellData == '0' && currInput=='0'){
        return false;
      }
      if (this.lastCharInputIsNumber()) {
        if(this.lastNumberIsZeroWithOperatorInFront() && cellData !=='.'){
          return false;
        }
        if(this.lastNumberIsDecimalEndByZero()){
          return true;
        }
        if (this.lastNumberIsDecimal() && this.isOP(cellData) || this.isNumber(cellData) ) {
          return true;
        }
        if (!this.lastNumberIsDecimal()) {
          return true;
        }
      }
      if (!this.lastCharInputIsNumber() && this.isNumber(cellData)) {
        return true;
      }
    }
    return false;
  }

  lastCharInputIsNumber(): boolean {
    return !isNaN(Number(this.input.charAt(this.input.length - 1)));
  }
  lastNumberIsDecimalEndByZero(){
    return this.input.charAt(this.input.length-1)=='0' && this.lastNumberIsDecimal();
  }
  lastNumberIsZeroWithOperatorInFront() {
    let lastZeroPos = this.input.lastIndexOf("0");
    return this.isOP(this.input.charAt(this.input.length - 2)) && lastZeroPos == this.input.length - 1;
  }
  lastNumberIsDecimal(): boolean {
    const currInput = this.input;
    let indexOfDot = currInput.lastIndexOf('.');
    let lastNumberIndex = currInput.length - 1;
    if(indexOfDot == -1 ){
      return false;
    }
    return (this.getFarestIndexOfOP()<indexOfDot && indexOfDot < lastNumberIndex) ? true : false;
  }
  getFarestIndexOfOP():number{
    const currInput = this.input;
    for(let i = currInput.length -1;i>=0;i--){
      if(this.isOP(currInput.charAt(i))){
        return i;
      }
    }
    return 0;
  }

  isNumber(cellData: string): boolean {
    return !isNaN(Number(cellData));
  }

  isOP(cellData: string): boolean {
    const arr = ['+', '-', '*', '/'];
    return (arr.lastIndexOf(cellData) !== -1) ? true : false;
  }

  getResult() {
    if (!this.lastCharInputIsNumber()) {
      this.input = this.input.substring(0, this.input.length - 1)
    }
    if(eval(this.input)=='Infinity'){
      this.input = '0';
      this.result = 'MATH ERROR';
      return;
    }
    this.result = eval(this.input);
    this.input = this.result.toString();
  }
}




