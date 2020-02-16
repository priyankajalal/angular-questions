import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Emp} from '../models/Emp'
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/delay';

@Injectable()
export class TestService {
  constructor(private http: HttpClient) {
  }

  emps = [
    {
      name: "vinod",
      age: 29
    },
    {
      name: "priyanka",
      age: 22
    }
  ]


  public getEmps(): Observable<Emp> {
    const arraySource = from(this.emps);
    return arraySource.pipe(
      map(jsonRow => Object.assign({}, jsonRow))
    )
  }


}
