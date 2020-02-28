import {Component, OnInit} from '@angular/core';
import {Portfolio} from "../models/portfolio";
import {PortfolioService} from "../service/portfolioService";
import {PortfolioEvent} from "../models/portfolioEvent";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) {
  }

  positions: Portfolio[] = [
    {
      ticker: "MSFT",
      name: "Microsoft",
      qty: 10,
      price: 120.90
    },
    {
      ticker: "AAPL",
      name: "Apple",
      qty: 5,
      price: 320.90
    }
  ]

  ngOnInit() {
    console.log("ngOnInit");

  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    var tickers = this.positions.map(position => position.ticker);
    this.portfolioService.emit(new PortfolioEvent("SymbolChanged", tickers))
  }

  showDetails(position: Portfolio) {
    let tickers = [position.ticker]
    this.portfolioService.emit(new PortfolioEvent("SymbolChanged", tickers))
  }


}
