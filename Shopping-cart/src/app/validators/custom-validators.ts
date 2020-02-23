import {AbstractControl} from "@angular/forms";
import {RegisterService} from "../services/register.service";
import {delay, filter, map} from 'rxjs/operators';
import {from, Observable} from 'rxjs';


export function ValidName(control: AbstractControl) {

  if (!["Mr", "Mrs"].find(prefix => control.value.startsWith(prefix))) {
    return {validName: true};
  }
  return null;
}

export class CustomValidators {
  static createValidator(registerService: RegisterService) {
    return (control: AbstractControl) => {
      return registerService.checkEmailExist(control.value)
        .pipe(
          map(res => {
            return res ? {emailTaken: true} : null;
          })
        )
    };
  }

}
