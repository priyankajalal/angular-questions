import { Directive,ElementRef,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(){
    this.el.nativeElement.style.color = 'red';
  }

  changeColor(nextColor: string){
    this.el.nativeElement.style.color = nextColor;
  }
}
