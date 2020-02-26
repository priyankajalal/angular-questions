console.log("Vinod")


let list1 = [12, 34, 5, 6, 7, 3, 4, 1]
let list2 = list1.filter(a => a > 3)
console.log(list1)
console.log(list2)
let list3 = list1.sort(sortNumbers)

function sortNumbers(n1: number, n2: number) {
    if (n1 > n2) {
        return 1;
    }

    if (n1 < n2) {
        return -1;
    }

    return 0;
}

function sortPersons(n1: Person, n2: Person) {
    if (n1.first > n2.first) {
        return 1;
    }

    if (n1.first < n2.first) {
        return -1;
    }

    return 0;
}

console.log(list3)


function cubeMe(a: number) {
    return Math.pow(a, 3)
}

let sss1 = cubeMe(10)

//let sss2 = CubeSuper(10)

interface MyAny {
    [key: string]: any
}

let test2: MyAny

//test2.z = "1"

let test1: MyAny[]
test1
type MyType = 'vinod'
let myType1: MyType
type MyCordinates = [number, number, number]
type Style = 'bold' | 'normal' | 'italic'
let style1: Style = 'bold'


const c1: MyCordinates = [1, 2, 3]
let s = 23;
let a11
let array1 = []
//s = "vvv"
let a: number = 23
//a = "vinod"
let persons: Person[] = []
persons.push({first: "aaaa", last: "a"})
persons.push({first: "priu", last: "a"})
persons.push({first: "paaa", last: "a"})
persons.push({first: "bbb", last: "a"})

//persons.push("12")

let p1: Person = {
    first: "vinod",
    last: "nayal",
    address: "city 1"
}
persons.push(p1)
let p222=persons.sort(sortPersons)
console.log(p222)
console.log(persons)

let z = pow(13, 2)
//let z1 = pow("aa", 2)


async function test() {
    return "Hello"
}

interface Person {
    first: string;
    last: string;

    [key: string]: any
}

function pow(x: number, y: number) {
    return Math.pow(x, y)
}
