import {Component} from '@angular/core';
import {evaluate} from "mathjs";

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
  input = '';
  result = 10;
  INVALID_ERR = "INVALID_ERR";
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
      this.input = '';
    } else {
      alert(this.INVALID_ERR)
    }
  }

  isValidToAdd(cellData: string): boolean {
    /**
     * Kiểm tra chuỗi hiện tại:
     *      Nếu null -> cho add + - num
     *      Nếu không null -> kiểm tra kí tự cuôối
     *          Nếu là số
     *              kiểm tra có phải số thập phân hay ko ?
     *                  có : ->  add OP and num
     *                  không: -> cho add tất
     *          Nếu là OP hoặc dot : chỉ cho add số
     */
    const currInput = this.input;
    if(cellData == 'C'){
      return false;
    }

    if (currInput.trim() == '') {
      if (this.isNumber(cellData) || (cellData == '+') || cellData == '-') {
        return true;
      }
    }
    if (currInput.trim() !== '') {
      if (this.lastCharInputIsNumber()) {
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
    // nếu input chưa có nhập gì thì sẽ trả về 0.
    if (this.input.trim() === '') {
      this.result = 0;
      return;
    }
    // nếu viết thừa OP thì sẽ tự lược đi OP ở cuối sau đó tính như thường, thay vì báo lỗi.
    if (!this.lastCharInputIsNumber()) {
      this.input = this.input.substring(0, this.input.length - 1)
    }
    this.result = eval(this.input);
  }
}




