import {Component} from '@angular/core';
import {TestService} from '../services/testService';
import {Observable} from "rxjs";
import {Emp} from "../models/Emp";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //emps: Observable<Emp>;
  //emps: Emp[] = [];
  emps: Emp[] = [];

  constructor(private testService: TestService) {
  }

  test() {
    this.testService.getEmps().subscribe(x => this.emps.push(x))
  }


}
