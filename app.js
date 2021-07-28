
//oop javascript

//constructor function
function Car(name, model, color) {
    let _tyres = 4; //private 
    this.name = name;
    this.model = model;
    this.color = color;
    //access the private field
    Object.defineProperty(this, 'tyres', {
        configurable: false,
        get: function () {
            return _tyres;
        }
    });

    // this.start = function () {
    //     console.log(`${this.name} / engine start`);
    // };
    // this.stop = function () {
    //     console.log(`${this.name} / engine stop`);

    // };
}

Car.prototype.start = function () {
    console.log(`${this.name} / engine start`);
};

Car.prototype.stop = function () {
    console.log(`${this.name} / engine stop`);
};

const bmw1 = new Car("bmw", 2010, "silver");
const veran = new Car("verna", 2005, "black");

console.log(bmw1);
console.log(veran);
console.log(bmw1.tyres);
bmw1.tyres = 7;
console.log(bmw1.tyres);

// console.log(bmw1.__proto__);
// console.log(Car.prototype);

// bmw1.start();
// bmw1.stop();

// veran.start();
// veran.stop();

// console.log([].__proto__);
// console.log(Array.prototype);

// function Lancer(name, model, color, maxspeed) {
//     this.name = name;
//     this.model = model;
//     this.color = color;
//     this.maxspeed = maxspeed;
// }

// //Inherts
// Lancer.prototype = Object.create(Car.prototype); // new object from Car and put it in lancer prototype 
// Lancer.prototype.constructor = Lancer; // reset Lancer constructor
// function inherts(child, parent) {
//     //Inherts
//     child.prototype = Object.create(parent.prototype); // new object from Car and put it in lancer prototype 
//     child.prototype.constructor = child; // reset Lancer constructor
// };
// inherts(Lancer, Car);
// const merage = new Lancer('merage', 2002, 'silver', 220);
// console.log(merage);
// merage.start();


