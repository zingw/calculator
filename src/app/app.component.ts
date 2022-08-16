import {Component} from '@angular/core';
import  {evaluate}  from "mathjs";

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

/**
 * Nhập vào input
 *        1. kiểm tra input ban đầu nếu trống thì
 *            Khi Evaluate cho kết quả mặc định là 0
 *            cho add toán tử cộng (+) và trừ (-)
 *        2. Nếu input không trống, thì check kí tự cuối của input, nếu
 *            là số: có thể thêm số hoặc toán tử (OP)
 *            là toán tử: chỉ có thể thêm số
 *           3. kiểm tra tính hợp lệ của input trước khi Evaluate, nếu
 *            cuối input là 1 số: thì cho Evaluate
 *            cuối input là 1 OP : thì không cho Evaluate.
 */
export class AppComponent {
  input = '';
  result = '';
  INVALID_ERR = "INVALID_ERR";
  // @ts-ignore
  rows: Row[] = [
    {col1: '7', col2: '8', col3: '9', col4: '/'},
    {col1: '4', col2: '5', col3: '6', col4: '*'},
    {col1: '1', col2: '2', col3: '3', col4: '-'},
    {col1: '0', col2: '.', col3: 'C', col4: '+'},
  ];


  bindValueToInput(cellData: string) {
    if(this.input.trim()==='' && (cellData === '.' || cellData=== '/' || cellData ==='*')){
      alert(this.INVALID_ERR)
    }else if (this.isValidToAdd(cellData)){
      this.input += cellData;
    }
  }
  isValidToAdd(cellData:string):boolean{
    if(this.input.trim()==='') return true;
    if(this.lastCharInputIsNumber()) return true;
    if(!this.lastCharInputIsNumber() && this.isNumber(cellData)) return true;
    else{
      alert(this.INVALID_ERR)
      return false;
    }
  }

  lastCharInputIsNumber():boolean{
    return !isNaN(Number(this.input.charAt(this.input.length - 1)));
  }
  isNumber(cellData:string):boolean{
    return !isNaN(Number(cellData));
  }

  getResult() {
    // nếu input chưa có nhập gì thì sẽ trả về 0.
    if (this.input.trim() === '') {
      this.result = '';
    }
    if (!this.lastCharInputIsNumber()) {
      alert(this.INVALID_ERR);
    }
    console.log(evaluate(this.result));
  }
}




