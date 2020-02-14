import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../models/emp';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private empService:EmployeeService) { }

  empDetailList ;

  ngOnInit() {
      this.empService.getEmployees().subscribe(d => {this.empDetailList = d});
  }

}
