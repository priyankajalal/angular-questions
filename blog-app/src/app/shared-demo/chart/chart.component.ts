import {Component, OnInit} from '@angular/core';
import {PortfolioService} from "../service/portfolioService";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  tickers: String[];

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.portfolioService.on('AllChanged', (data: String[]) => {
      this.tickers = data;
    });


    this.portfolioService.on('SymbolClicked', (data: String) => {
      this.tickers = [data];
      //this.tickers.push(data);
    });
  }
}
