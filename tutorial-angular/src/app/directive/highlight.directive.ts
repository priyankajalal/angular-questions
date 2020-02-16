import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor: string='red';


 constructor(private el: ElementRef) {
   this.setColor('cyan');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.highlightColor || 'cyan');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(null);
  }

  private setColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
