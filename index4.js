function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);
//circle.location = {x:1}; 
//or
circle['location']={x:1};

circle.name = {value:"ehab"};
circle.last = "Qino";

delete circle['last'];
delete circle.name;
