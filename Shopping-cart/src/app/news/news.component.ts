import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {CommonService} from "../services/common.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:any;
  @Input() ticker:string;

  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.ticker){
      this.commonService.getData(`/news/${this.ticker}`).subscribe(res => {this.news=res,console.log(res)});
    }
  }

}
