import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './../models/emp';
import { map } from 'rxjs/operators';
import { toPromise } from 'rxjs/operators';

import { catch } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  constructor( private http: HttpClient) {}


  getEmployees():Observable<Employee>{
        return this.http.get(environment.baseUrl+"/emp")

   }

  getEmployeeByCode(empCode: string):Observable<Employee>{
          return this.http.get(environment.baseUrl+"/emp/"+ empCode);

     }

  getEmployeeByCode_Promise(empCode: string): Promise<Employee> {
      return this.http.get(environment.baseUrl+"/emp/" + empCode).toPromise();


  }

  getEmployeeByName(empName:string):Observable<Employee>{
      return this.http.get(environment.baseUrl + "/empName/" + empName);
  }

  getEmployeeByName_Promise(empName:string):Observable<Employee>{
        return this.http.get(environment.baseUrl + "/empName/" + empName).toPromise();
    }

}
