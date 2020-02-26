let a1234 = 10;
console.log(a1234);
import { from } from 'rxjs';
const arraySource = from([1, 2, 3, 4, 5]);
arraySource.subscribe(x => console.log(x));
//Observable.create()
//[1,2,3].delay(1)
//Rx.Observable.of(1, 2, 3)
//arraySource.pipe(map(x => x + 10)).subscribe(x => console.log(x))
//.map(x => x + '!!!'); // etc
var MyMonth;
(function (MyMonth) {
    MyMonth[MyMonth["Jan"] = 1] = "Jan";
    MyMonth[MyMonth["Feb"] = 2] = "Feb";
})(MyMonth || (MyMonth = {}));
var MyColors;
(function (MyColors) {
    MyColors["Red"] = "Red";
    MyColors["Blue"] = "/assets/Blue.png";
    MyColors["Green"] = "Green";
})(MyColors || (MyColors = {}));
let mycol1 = MyColors.Blue;
//console.log(mycol1)
