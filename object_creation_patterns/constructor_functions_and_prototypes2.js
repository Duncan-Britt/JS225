// Object.prototype.begetObject = function() {
//   function F() {};
//   F.prototype = this;
//   return new F();
// }
//
// let foo = {
//   a: 1,
// };
//
// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true

function neww(constructor, args) {
  let object = Object.create(constructor.prototype);
  let result = constructor.apply(object, args);

  return typeof result === 'object' ? result : object;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}
