import {AbstractControl} from '@angular/forms';
import {SignupService} from '../services/signup.service';


export function ValidName(control: AbstractControl) {
  if (!control.value.startsWith('Mr')) {
    return {validName: true};
  }
  return null;
}


export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https') || !control.value.includes('.com')) {
    return {validUrl: true};
  }
  return null;
}


export class CustomValidators {

  static MatchPassword(control: AbstractControl) {
    let password = control.get('password').value;
    let confirmPassword = control.get('confirmPassword').value;

    if (password != confirmPassword) {
      control.get('confirmPassword').setErrors({confirmPassword: true});
    } else {
      return null;
    }
  }

  static createValidator(signupService: SignupService) {
    return (control: AbstractControl) => {
      return signupService.checkEmailNotTaken(control.value).map(res => {
        return res ? null : {emailTaken: true};
      });
    };
  }
}

