import { Directive,Renderer2,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appAddChild]'
})

export class AddChildDirective {

  constructor(private render: Renderer2, private el: ElementRef ) { }


  @HostListener('click')
  onClick(){
      var div = this.render.createElement('div');
      var text = this.render.createText('This is the new div created!')

      this.render.appendChild(div,text);
      this.render.appendChild(this.el.nativeElement,div);

      this.render.addClass(div,'wild');
  }

}
