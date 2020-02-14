import { Component, OnInit } from '@angular/core';

import { CustomCollection } from './../temp/test';

import { from } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dropDownList = [{'name':'priyanka','id':1},{'name':'vinod','id':2},{'name':'garvit','id':3}];

  myHighlightColor:string="blue";
  cardNumber:number;

  constructor() { }

  testObserver(){

  	 //let names = ['Ram', 'Tom', 'Hary'];
     //let  source = from(names);

      //source.subscribe(val=> console.log(val));
  const source = from('Hello World');
  const arraySource = from([1, 2, 3, 4, 5]);

   source.subscribe(val => console.log(val));
    arraySource.subscribe(val => console.log(val));
   const map = new Map();
   map.set(1, 'Hi');
   map.set(2, 'Bye');
   const mapSource = from(map);
    mapSource.subscribe(val => console.log(val));
  }

  ngOnInit() {



      let coll2 = new CustomCollection<String>();

      coll2.add("vinod");
      coll2.add("priyanka");

      let val2=coll2.get(0);

      console.log(val2);

      let list:number[] = [1, 2, 3];
      let list2 = [1, "vinod", 3];

        let x:number =1;
        let y = 2;
        let z= x/y;
  }



}
