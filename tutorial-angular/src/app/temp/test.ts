export class CustomCollection<T> {

  private coll:T[];

  constructor() {
    this.coll = [];
  }

  add(val: T): void {
    this.coll.push(val);
  }

  get(index: number): T {
    return this.coll[index];
  }

}
