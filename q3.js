
var radius = 20
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;  //will work
    }
    perimeter: () => 2 * Math.PI * this.radius   //error
}

console.log(shape.diameter());
console.log(shape.perimeter());