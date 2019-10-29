import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent {
  outPut: string;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      searchVal: ''
    });
  }

  /**
   *
   * @returns
   * @memberof SolutionComponent
   * Method to convert the provided number to roman number.
   */
  getRomanData() {
    const { searchVal } = this.formGroup.value;
    if (isNaN(searchVal)) {
      this.outPut = 'Enter number only';
      return null;
    }
    if (searchVal > 3999) {
      this.outPut = 'Number can not be greater than 3999';
      return null;
    }

    const digits = String(+searchVal).split('');
    const key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
               '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
               '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let romanNum = '';
    let  i = 3;
    while (i--) {
      romanNum = (key[+digits.pop() + (i * 10)] || '') + romanNum;
    }
    this.outPut = Array(+digits.join('') + 1).join('M') + romanNum;
  }
}
