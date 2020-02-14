import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {CustomValidators, ValidateUrl, ValidName} from "../validators/custom.validator";
import {SignupService} from '../services/signup.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private signupService: SignupService) {
  }


  ngOnInit() {
    /*  this.myForm = new FormGroup({
        name: new FormControl('Benedict'),
        email: new FormControl(''),
        message: new FormControl('')
      });  */

    this.myForm = this.fb.group({
        'name': ["Vinod",
          [Validators.required,
            Validators.minLength(4),
            ValidName
          ]],
        websiteUrl: ['https://c.com', [Validators.required, ValidateUrl]],

        'password': ["", [Validators.required, Validators.minLength(4)]],

        email: ['vinod@gmail.com',
          [Validators.required,
            Validators.minLength(4),
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
          CustomValidators.createValidator(this.signupService)
        ],

        'confirmPassword': new FormControl(null,
          [Validators.required])
      },
      {validator: CustomValidators.MatchPassword}
    );

  }


  onClick() {
    console.log(this.myForm.value);
    console.log(this.myForm);
  }

  onSubmit(form: FormGroup) {
    console.log(this.myForm.value);
    console.log(form);

  }

}
