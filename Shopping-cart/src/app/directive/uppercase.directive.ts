import {Directive, HostBinding,HostListener,Output, ElementRef,Input,EventEmitter} from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})

export class UppercaseDirective {

  // @Input() name: string;

  constructor(private element: ElementRef) {
  }

  @HostBinding('style.color') color: string= 'red';

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.element.nativeElement.style.textTransform = 'uppercase';
  }

  @HostListener('window:keyup',['$event'])
  onKeyUp(){
    this.element.nativeElement.style.text='blue';
  }

}
