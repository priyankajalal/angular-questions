import { Directive ,ViewContainerRef,
                      OnChanges,
                      TemplateRef,Input} from '@angular/core';

@Directive({
  selector: '[appNgLoop]'
})
export class NgLoopDirectiveDirective {

  @Input() appNgLoopOf :Array<any>;

  constructor(private container: ViewContainerRef,
                            private template: TemplateRef<any>,) { }

  ngOnInit(): void {
      this.container.createEmbeddedView(this.template);
    }

    ngOnChanges() {
    this.container.clear();

        for (const input of this.appNgLoopOf) {
          this.container.createEmbeddedView(this.template,{
                                                                  $implicit: input,
                                                                  index: this.appNgLoopOf.indexOf(input),
                                                                 });
        }
      }

}
