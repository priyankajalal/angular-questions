import { Component, OnInit,Input,OnChanges,SimpleChanges,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() name;

  constructor() { }

  @Output() childEvent : EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
      console.log(changes);
  }

//  eventEmitterMethod
   fireEvent(){
      this.childEvent.emit("I am a message from Child!");
  }

}
