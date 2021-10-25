// function shallowCopy(object) {
//   // return Object.create(object);
//   newObject = {};
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       newObject[key] = object[key];
//     }
//   }
//
//   let proto = Object.getPrototypeOf(object);
//   Object.setPrototypeOf(newObject, proto);
//
//   return newObject;
// }
//
// let foo = {
//   a: 1,
//   b: 2,
// };
//
// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };
//
// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(
//   baz.hasOwnProperty('a'),  // false
//   baz.hasOwnProperty('b'),  // false
// );

function extend(destination) {
  for (let i = 1; i < arguments.length; i++) {
    let source = arguments[i];
    for (let prop in source) {
      if (Object.prototype.hasOwnProperty.call(source, prop)) {
        destination[prop] = source[prop];  
      }
    }
  }

  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
