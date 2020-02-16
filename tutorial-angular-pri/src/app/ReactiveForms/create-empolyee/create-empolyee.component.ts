import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-empolyee',
  templateUrl: './create-empolyee.component.html',
  styleUrls: ['./create-empolyee.component.css']
})
export class CreateEmpolyeeComponent implements OnInit {

  employeeForm : FormGroup;
  constructor() { }

  ngOnInit() {

      // New instance of the FormGroup class and pass an object to it.
      this.employeeForm = new FormGroup({
      // we pass key and value pair (key  is field name : value is  instance of the FormControl class).
          fullName :  new FormControl(),
          email : new FormControl(),
          skills : new FormGroup({
              skillName : new FormControl(),
              experienceInYears : new FormControl(),
              proficiency : new FormControl()
          })
      })
  }

  onSubmit(): void {
    console.log(this.employeeForm);
  }

//setValue() to populate all the form controls
//patchValue() to populate all or subset of form controls

  onLoadData(): void {
    //this.employeeForm.setValue({
    this.employeeForm.patchValue({
         fullName : "Priyanka Jalal",
         email : "priyanka@gmail.com",
         skills : {
         skillName : "Angular",
         //experienceInYears : 2,
         //proficiency : "intermediate"
         }
    })
  }

}
