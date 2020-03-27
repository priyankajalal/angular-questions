import {Component, OnInit} from '@angular/core';
import {PortfolioService} from "../service/portfolioService";
import {PortfolioEvent} from "../models/portfolioEvent";
import {Subject} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private subject$ = new Subject();

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.subject$
      .pipe(
        filter((e: PortfolioEvent) => e.name === "Test"),
        map((e: PortfolioEvent) => e.value)
      )
      .subscribe(d => console.log(d));
  }

  showAllNews() {
    this.portfolioService.emit(new PortfolioEvent("AllChanged", ["AAPL", "GOOG", "TWX"]))
  }

  showSubjectDemo() {
    this.subject$.next(new PortfolioEvent("All", ["AAPL", "MSFT"]));
    this.subject$.next(new PortfolioEvent("Test", "Testing"));
  }

}
