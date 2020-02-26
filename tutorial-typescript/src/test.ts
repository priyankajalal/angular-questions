let a1234: number = 10
console.log(a1234)

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {from} from 'rxjs';

const arraySource = from([1, 2, 3, 4, 5]);

arraySource.subscribe(x => console.log(x))




//Observable.create()
//[1,2,3].delay(1)
//Rx.Observable.of(1, 2, 3)
//arraySource.pipe(map(x => x + 10)).subscribe(x => console.log(x))

//.map(x => x + '!!!'); // etc

enum MyMonth {Jan = 1, Feb}

enum MyColors {Red = "Red", Blue = "/assets/Blue.png", Green = "Green"}

let mycol1: MyColors = MyColors.Blue
//console.log(mycol1)
