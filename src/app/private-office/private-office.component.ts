import { Component } from '@angular/core';

@Component({
  selector: 'private-office',
  templateUrl: './private-office.component.html',
  styleUrls: ['./private-office.component.css']
})

export class PrivateOfficeComponent {

pageNumber : number;

  constructor(
  ) {
    this.pageNumber = 1;
  }

  changePageNumber(num: number) {
    this.pageNumber = num;
  }
}