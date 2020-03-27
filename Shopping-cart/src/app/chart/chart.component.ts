import {Component, Input, OnInit, SimpleChange} from '@angular/core';
import {CommonService} from "../services/common.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() ticker:string;

  chartDetail:any="";
  message:string = "I am a message from child Chart using ViewChild!";

  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }

  ngOnChanges(change:SimpleChange){
    if(this.ticker){
      this.commonService.getData(`/chart/${this.ticker}`).subscribe(res => {this.chartDetail=res,console.log(res)});
    }
  }

}
