import {Component, OnInit, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() symbol;
  @Input() time;


  constructor() {
    console.log(`constructor data is ${this.symbol}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.symbol}`);
    console.log(`ngOnChanges - changes are ${changes}`);
    if (changes.time) {
      console.log(`time has changed from old value ${changes.time.previousValue} to new value ${changes.time.currentValue}`);
    } else if (changes.symbol) {
      console.log(`time has changed from old value ${changes.symbol.previousValue} to new value ${changes.symbol.currentValue}`);
    } else {
      console.log('unknown changes not handled so far');
    }
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.symbol}`);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
