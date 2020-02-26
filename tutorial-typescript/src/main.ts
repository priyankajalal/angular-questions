class Point {
    // private x: number;
    // private y: number;

    // constructor(x? :number,y? :number){
    //     this.x = x;
    //     this.y = y;
    // }

    //Above can be written as:

    constructor(private x? :number,private y? :number){
    }

    draw(){
        console.log('X : ' + this.x + ' ' + ' Y : ' + this.y);
    }

    //As all fields are private so to show user the value we use Getter method.
    get X(){
        return this.x;
    }

    //As all fields are private so for user to change/set the value we use Setter method.
    set X(value){
        if(value < 0 ){
            throw new Error ("Value cannot be less than 0.");
        }
        this.x = value;
    }

}

//Creating object of the class
//Contructor is a method which is called when we initialize or create object of a class.

    let point = new Point(1,2);
    let x = point.X;
    point.X = 10;

    point.draw();


