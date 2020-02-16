import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../services/employee-service.service';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component implements OnInit {

searchName:string="";
  employees:any;
  filteredEmp:any;

  constructor(private empService : EmployeeService ) { }

  ngOnInit() {
      this.employees = this.empService.getEmployee();
      this.filteredEmp = this.employees;
  }


  filterByName(){
   this.filteredEmp = this.employees.filter(emp => emp.name.toLowerCase().includes(this.searchName.toLowerCase())) ;
  }

  filterMaleEmp(){
      this.filteredEmp = this.employees.filter(emp => emp.gender == "Male");
  }

  filterFemaleEmp(){
      this.filteredEmp = this.employees.filter(emp => emp.gender == "Female");
  }

  getMaleEmployeesCount(){
     return this.employees.filter(emp => emp.gender == "Male").length;
  }
}
