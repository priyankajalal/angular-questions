import { Component, OnInit,ViewChild ,Renderer,Renderer2,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-test-directives',
  templateUrl: './test-directives.component.html',
  styleUrls: ['./test-directives.component.css']
})
export class TestDirectivesComponent implements AfterViewInit {
   @ViewChild('para1') p1;
   @ViewChild('focus1') f1;
  numbers = [1, 2, 3];

  constructor(private renderer: Renderer,private renderer2: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(){


  //this.p1.nativeElement.style.color = "red";

  //this.renderer.setElementStyle(this.p1.nativeElement,'color','blue');
   this.renderer2.setStyle(this.p1.nativeElement,'color','cyan');
   this.renderer.invokeElementMethod(this.f1.nativeElement,'focus');

  }

}
