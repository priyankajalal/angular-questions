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
        "name": ['Mr Vinod', [Validators.required, Validators.minLength(4), ValidName]],
        "email": ['v@gmail.com', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
          , CustomValidators.createValidator(this.registerService)

        ]
      }
    )
  }

  SaveUser() {
    console.log(this.registerForm.value);
    this.commonService.postData("/users", this.registerForm.value).subscribe(res => console.log(res))

  }
}
