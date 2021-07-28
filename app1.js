class Person {
    #eyeColor = 'blue'; //private
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }//end constructor

    run() {
        console.log(`${this.name} is running`);
    }

    get eyeColer() {
        return this.#eyeColor;
    }
}//end class

//inherts 
class child extends Person {
    constructor(name, age, parentName) {
        super(name, age); //calls the parent constructor , in our example calls the Person constructor
        this.parentName = parentName;

    }

}
const ehab = new Person('Ehab', 40);
console.log(ehab);

const mohamed = new child('mohamde', 15, 'ahmed');
mohamed.run();
console.log(mohamed);