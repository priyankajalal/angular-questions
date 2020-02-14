import { Component, OnInit } from '@angular/core';
import { Employee } from './../models/emp';
import { EmployeeService } from './../services/employee.service';
import { AnonymousSubscription } from "rxjs/Subscription";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    empName:string="";
    empData:Employee[];
    empId:string;
    timerSubscription:AnonymousSubscription;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
     this.timerSubscription = Observable.timer(1000,5000)
     .map(x=> x*3)


   //.subscribe( res=> {console.log(res); this.loadEmp();} );
  }

  loadEmpName(){
        this.empService.getEmployeeByName(this.empName)
        .subscribe(d => {console.log(d); this.empData= d});
  }

  loadEmpNameUsingPromise(){
        this.empService.getEmployeeByName_Promise(this.empName)
        .then(d => {console.log(d); this.empData= d});
  }

  loadEmpUsingPromise(){
       this.empService.getEmployeeByCode_Promise(this.empId)
       .then(d => {console.log(d); this.empData= d;});
  }

  loadEmp(){
    this.empService.getEmployees()
     .subscribe(d => {console.log(d); this.empData= d;});
  }

  getEmpId(){
      this.empService.getEmployeeByCode(this.empId)
      .subscribe(d => {console.log(d); this.empData = d;});
  }

  ngOnDestroy(){

      if (this.timerSubscription) {
                //this.timerSubscription.unsubscribe();
          }

    }

}
