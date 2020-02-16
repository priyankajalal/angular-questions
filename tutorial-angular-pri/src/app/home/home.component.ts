import { Component, OnInit } from '@angular/core';
import { CustomCollection } from './../model/custom-collection';
import { IEmp } from './../interfaces/emp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  counter:number = 0;
  name = "priyanka";
  emps = [];
  empName: string;
  salary = 12000;
  childMessage: string;

  ngOnInit() {
  }

  decreaseCounter(){
    this.counter = this.counter-1;
  }

  increaseCounter(){
    this.counter = this.counter+1;
  }

  parentFunction(event){
      this.childMessage = event;
      console.log(event);
  }

 clickTest(){
   console.log("I m clicked");
   let coll1 = new CustomCollection<number>();
   coll1.add(1);
   coll1.add(2);

   let coll2 = new CustomCollection<number>();
   coll2.add(3);

   console.log(coll1.get(1));
    // runtime error
   let a= coll1.get(1)/0;
   //console.log("unreachable");

  }


  testInterface(){
    let e1 = {id:789,name:"vinod"};
    let e2 = {id:789,name:"vinod"};
    this.emps = [e1,e2,{id:789,name:"vinod"},{id:2,name:"priyanka"}];


  }


}
