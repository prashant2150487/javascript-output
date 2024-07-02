function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;

}
const lydia=new Person('Lydia','Hallie');
const sarah=Person('Sarah',"Smith"); 
// for this this refer to window object undefind

console.log(lydia)
console.log(sarah)