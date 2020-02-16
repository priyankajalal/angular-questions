import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  constructor() { }

  message:string = "";
  count:number = 0;

  ngOnInit() {
  }

  increaseCounterByOne(){
      this.count = this.count + 1;
      this.message = 'Counter :' + this.count;
  }

  decreaseCounterByOne(){
      this.count = this.count - 1;
      this.message = 'Counter :' + this.count;

  }

}
