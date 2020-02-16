import {Component, OnInit} from '@angular/core';
import {Employee} from './../../models/emp';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  emp: Employee = {name: "", email: "", id: 0, address: "1111"};
  emailPattern="^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  ngOnInit() {

  }

  submitForm() {
    console.log(this.emp);

  }

}
