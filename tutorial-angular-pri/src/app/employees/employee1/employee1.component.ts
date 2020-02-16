import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component implements OnInit {

  mySalary = 105000;
  constructor() { }

  ngOnInit() {
  }

}
