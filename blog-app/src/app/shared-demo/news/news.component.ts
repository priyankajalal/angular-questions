import {Component, OnInit} from '@angular/core';
import {PortfolioService} from "../service/portfolioService";
import {PortfolioEvent} from "../models/portfolioEvent";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  tickers: String[];

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.portfolioService.on('AllChanged', (data: String[]) => {
      this.tickers = data;
    });
  }

  symbolClick(ticker) {
    this.portfolioService.emit(new PortfolioEvent("SymbolClicked", ticker))
  }

}
