import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from "../chart/chart.component";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  @ViewChild(ChartComponent) childChartRef:ChartComponent ;

  constructor() { }

  message:string;

  ticker:any;

  ngAfterViewInit() {
    this.message = this.childChartRef.message;
  }

  positionEventHanldler(event){
   this.ticker = event;
  }

}
