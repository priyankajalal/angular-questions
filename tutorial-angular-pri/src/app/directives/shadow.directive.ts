import { Directive ,ElementRef,Renderer2,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  defaultColor= "red";
  mouseOverColor="green";

  constructor(private element: ElementRef, private renderer: Renderer2) {
      this.mouseOverColor = element.nativeElement.getAttribute("color");
      renderer.setStyle(element.nativeElement, 'background', this.defaultColor);
  }

  @HostListener('mouseenter')
     onMouseEnter() {
          this.renderer.setStyle(this.element.nativeElement, 'background',this.mouseOverColor);
   }

  @HostListener('mouseleave')
     onMouseLeave() {
          this.renderer.setStyle(this.element.nativeElement, 'background',this.defaultColor);
  }

}
