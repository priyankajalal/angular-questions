import { AbstractControl } from '@angular/forms'
import {SignupService} from '../services/signup.service';

export function emailDomain(control : AbstractControl) : {[key: string]:any} | null{
  const email: string = control.value;
  const domain = email.substring(email.lastIndexOf('@')+1);
  if (email == " " || domain.toLowerCase()=== 'gmail.com')
  {
    return null;
  }else {
    return { emailDomain : true };
  }

}

export class CustomValidators {

  static MatchPassword(control : AbstractControl){
    let password = control.get('password').value;
    let confirmPassword = control.get('confirmPassword').value;

    if (password != confirmPassword ){
      control.get('confirmPassword').setErrors({confirmPassword: true});
    }
  }

  static createAsyncValidator(signupService:SignupService ){
    return (control: AbstractControl) => {
      return signupService.checkEmailNotTaken(control.value).map(res =>{
        return res ? null : {emailTaken:true};
      })


    }
  }


}
