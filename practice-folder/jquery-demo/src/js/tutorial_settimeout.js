function sum(a, b) {
    return a + b;
}
a = 66

arr = [1, 2, 3, 4, 5, 6]


sumVal = arr.reduce((a, b) => a + b, 0)
console.log(sum(2, 3))
setTimeout(() => {
    console.log("vinod nayal called me only one")
}, 500);
setInterval(
    function() {
        console.log("I am called again after 1 sec")
    },
    1000
)
console.log("hi vinod")