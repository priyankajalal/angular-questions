import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChildViewComponent} from "../child-view/child-view.component";

@Component({
  selector: 'app-view-child-demo',
  templateUrl: './view-child-demo.component.html',
  styleUrls: ['./view-child-demo.component.css']
})
export class ViewChildDemoComponent implements OnInit {
  @ViewChild('mychild') inputChild: ElementRef;

  @ViewChild(ChildViewComponent) mychild: ChildViewComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.inputChild.nativeElement.value = "Anchovies! 🍕🍕";
  }

  callChild() {
    this.mychild.callMe();
  }

}
