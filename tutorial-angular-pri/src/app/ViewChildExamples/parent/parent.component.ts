import { Component, OnInit,ViewChild,AfterViewInit,ElementRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ChangeColorDirective } from '../change-color.directive';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {

  constructor() { }


  //@ViewChild('inputRef') inputElementRef: ElementRef;
  //@ViewChild('paraRef') paraElementRef: ElementRef;

  ngAfterViewInit() {
    //this.inputElementRef.nativeElement.focus();
    //this.paraElementRef.nativeElement.style.color = 'red';
  }

  //@ViewChild(ChildComponent) childComponentRef: ChildComponent;


  //increase(){
    //this.childComponentRef.increaseCounterByOne();
  //}

  //decrease(){
    //this.childComponentRef.decreaseCounterByOne();
  //}


//  @ViewChild(ChangeColorDirective) colorDirectiveRef: ChangeColorDirective;

  //changeHue(nextColor:string){
    //this.colorDirectiveRef.changeColor(nextColor);
  //}

  ngOnInit(){
  }
}
