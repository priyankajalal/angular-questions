var Car = /** @class */ (function () {
    function Car(make) {
        this.make = make;
    }
    Car.prototype.getMake = function () {
        return this.make;
    };
    return Car;
}());
