//How to create object

var person = {
    
    firstname:'Harsh',
    lastName:'Shah',
    address:'Pune',
    birthYear:1994,
    job:'Software Developer',
    family:['Jinesh','Poonam','Mom','Dad']
};

console.log(person);

console.log(person.firstname);
console.log(person.lastName);
console.log(person['address']);

person.firstname='Jiensh';
console.log(person);

var person1 = new Object();
person1.firstname='Harsh Shah';

console.log(person1);
