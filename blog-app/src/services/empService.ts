import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Emp} from '../models/Emp'


@Injectable()
export class EmpService {
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
