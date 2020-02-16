export class CustomCollection<T> {
  coll1:T[] = [];

  add(a:T){
   let var1= 90;
   this.coll1.push(a);
  }

 get(index: number):T {

  return this.coll1[index];

 }
}
