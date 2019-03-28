var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [{
    name: 'Twix',
    species: 'papagal',
    age: 4
  }, {
    name: 'Mars',
    species: 'caine',
    age: 2,
  }, {
    name: 'Bounty',
    species: 'hamster',
    age: 4
  }, {
    name: 'Lion',
    species: 'pisica',
    age: 10
  }]
};
var length= person.pets.length;

var today= new Date();
var yyyy = today.getFullYear();
var AgeDragos = yyyy - person.birthYear;
var sum= 0
for (var i = 0; i < length; i++) {
  sum = AgeDragos - person.pets[i].age;
  console.log ('Intre ' + person.firstName + ' si ' + person.pets[i].name + ' este o diferenta de ' + sum + ' ani.');
}
