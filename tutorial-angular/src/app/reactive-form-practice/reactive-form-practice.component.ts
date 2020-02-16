import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {CustomValidators, emailDomain} from "../validators/custom-validator-practice";
import {SignupService} from '../services/signup.service';

@Component({
  selector: 'app-reactive-form-practice',
  templateUrl: './reactive-form-practice.component.html',
  styleUrls: ['./reactive-form-practice.component.css']
})
export class ReactiveFormPracticeComponent implements OnInit {

  employeeForm : FormGroup;
  constructor(private singnupService:SignupService,private fb : FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      "name" : ['',[Validators.required,Validators.minLength(3)]],

      "email" : ['',[Validators.required,Validators.minLength(4),emailDomain,
                     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
                     CustomValidators.createAsyncValidator(this.singnupService)],

      "password": [null,[Validators.required, Validators.minLength(4)]],

      "confirmPassword":[null,Validators.required]
    }),
      {validator: CustomValidators.MatchPassword}


  }

}
