import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from "../chart/chart.component";
import {CustomUppercasePipe} from "../pipe/custom-uppercase.pipe";


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  // @ts-ignore
  @ViewChild(ChartComponent) childChartRef:ChartComponent ;

  name:string;
  lastname:string;

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
