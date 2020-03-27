console.log("vinod")

number = 10;

function increment() {
    number++;
}

increment()

function createCircle(radius) {

    return {
        radius,
        render: () => { console.log(`render me with radius ${radius}`) }
    }

}

let c1 = createCircle(10);
c1['location'] = 200;
c1['add'] = (a, b) => { return a + b }
delete c1['location']
c1.render()