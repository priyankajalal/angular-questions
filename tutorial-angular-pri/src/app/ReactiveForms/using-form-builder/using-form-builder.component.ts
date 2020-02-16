import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-using-form-builder',
  templateUrl: './using-form-builder.component.html',
  styleUrls: ['./using-form-builder.component.css']
})
export class UsingFormBuilderComponent implements OnInit {

  employeeForm : FormGroup;
  submitted = false;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {

      this.employeeForm = this.fb.group({
          'fullName' : ['vinod', Validators.required, Validators.minLength(4)],

      })
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.employeeForm);
  }

  onLoadData(): void {
    this.employeeForm.patchValue({
         fullName : "Priyanka Jalal",
         email : "priyanka@gmail.com",
         skills : {
         skillName : "Angular",
         experienceInYears : 2,
         proficiency : "intermediate"
         }
    })
  }

}

