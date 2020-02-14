import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) {
  }

  test() {
    let list1 = [1, 2, 3, 4];
    list1.filter(x => x > 3).map(x => x * 9)

  }

  testf(x) {
    return x > 2
  }

  testf2(x) {
    return x * 9
  }

  checkEmailNotTaken(email: string) {
    return this.http.get('assets/users.json')
      .delay(1000)
      .map(users => users.filter(user => user.email === email))
      .map(users => !users.length)
  }
}
