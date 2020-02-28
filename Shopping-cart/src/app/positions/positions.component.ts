import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonService} from "../services/common.service";

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  @Output() positionEventEmitter = new EventEmitter();

  constructor(private commonService:CommonService) { }

  positions:any;

  ngOnInit() {
    this.commonService.getData('/positions').subscribe(res => this.positions=res);
  }

  onPositionEventFire(ticker){
    this.positionEventEmitter.emit(ticker);
  }

}
