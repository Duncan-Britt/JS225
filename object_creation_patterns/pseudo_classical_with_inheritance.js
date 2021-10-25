function Parent() {
  this.foo = 'bar';
  this.baz = 'xyz';
}

Parent.prototype.sayFoo = function() {
  console.log(this.foo);
}

let parentInstance = new Parent();

function Child() {
  this.qux = 'xyzzy';
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

let childInstance = new Child();
childInstance.__proto__.__proto__ === Parent.prototype; // true
childInstance.hasOwnProperty('constructor'); // false
childInstance.constructor === Child; // true
