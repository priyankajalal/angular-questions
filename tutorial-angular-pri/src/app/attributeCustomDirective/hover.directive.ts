import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})

export class HoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener("mouseover")
  onMouseEnter(){
      this.el.nativeElement.style.color="blue";
  }

  @HostListener("mouseleave")
  onMouseLeave(){
      this.el.nativeElement.style.color = "black";
  }

//Event binding using HostListener:
  @HostListener("click")
  onClicked(){
      alert("Host Element Clicked");
  }
}
