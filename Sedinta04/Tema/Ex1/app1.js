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
var length = person.pets.length;
var total = 0;
for (var i = 0; i < length; i++) {
total += person.pets[i].age
}
console.log ( 'Suma anilor animalelor este egala cu ' + total );
