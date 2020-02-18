import { Injectable } from '@angular/core';
import { IEmp } from './../interfaces/emp';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor() {
    console.log(" Service Working ");
  }

  employees: IEmp[] = [
              {"id":1,"name":"Vinod","gender":"Male"},
              {"id":2,"name":"Priyanka","gender":"Female"},
              {"id":3,"name":"Garvit","gender":"Male"}
              ];

  getEmployee(){
     return this.employees;
  }
}
