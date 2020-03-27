console.log("Hello Priyanka");

let name = "vinod";
console.log(name);
console.log("priyanka");
console.log("priyanka2");
console.log("priyanka3");



function Emp(name) {
    this.name = name;
    this.getname = function() {
        return "Hi " + this.name;
    }
    this.toString = function() {
        return "New implementation " + this.name;
    }
}
emp = new Emp("vinod");
console.log(emp)