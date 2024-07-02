function Person(first,name){
    this.firstName=this.firstName;
    this.lastName=this.lastName;
}
const member=new Person('Prashant','Sachan');
Person.prototype.getFullName=function(){
    return this.firstName+this.lastName
}

console.log(member.getFullName())