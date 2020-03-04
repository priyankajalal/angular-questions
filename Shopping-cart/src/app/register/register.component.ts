import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators, ValidName} from "../validators/custom-validators";
import {RegisterService} from "../services/register.service";
import {delay, filter, map} from 'rxjs/operators';
import {CommonService} from "../services/common.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private commonService: CommonService) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      "name" : ['Mr Vinod', [Validators.required, Validators.minLength(4), ValidName]],

      "email" : ['v@gmail.com', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
          , CustomValidators.createValidator(this.registerService)],

      "ssn" : ['',[Validators.required,Validators.minLength(9),Validators.pattern("^\\d{3}-\\d{2}-\\d{4}$")]],

      "password" :[null,[Validators.required, Validators.minLength(4)]],
          // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$])(?=.{9,})')]]

      "confirmPassword" :[null,[Validators.required]]
      },
    {validator: CustomValidators.MatchPassword}
    )
  }

  SaveUser() {
    console.log(this.registerForm.value);
    this.commonService.postData("/users", this.registerForm.value).subscribe(res => console.log(res))

  }

}
