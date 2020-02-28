import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {from, Observable} from 'rxjs';
import {delay, filter, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';


@Injectable()

export class RegisterService {


  constructor(private http: HttpClient) {
  }

  checkEmailExist(email: string): Observable<boolean> {

    let url = environment.baseUrl + "/email/check/" + email
    return this.http.get(url).pipe(
                              map(res => res.match)

      )
  }


  checkEmailExist_Local(email: string): Observable<boolean> {
    return this.http.get('assets/users.json')
      .pipe(
        map(users =>
          users.filter(user => user.email == email).length

        )
      )
  }
}
