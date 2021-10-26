const Animal = {
  go() {
    console.log('go fast!');
  },

  sayHi() {
    console.log(this.name + ' says hi!');
  },

  init(name) {
    this.name = name;
    return this;
  },
};

let foo = Object.create(Animal).init('Walter');
foo.sayHi();
foo.go();

const Bee = Object.create(Animal);
Bee.buzz = function() {
  console.log('bzzzz');
};

(function() {
  const bees = {};

  Bee.init = function(name) {
    Animal.init.call(this, name);
    bees[this.name] = {
      honey: 0,
    };
    return this;
  };

  Bee.makeHoney = function() {
    bees[this.name]['honey'] += 5;
  };

  Bee.showHoney = function() {
    console.log(bees[this.name]['honey']);
  };

})();

let bar = Object.create(Bee).init('Aldrin');
bar.sayHi();
bar.buzz();
bar.showHoney();
bar.makeHoney();
bar.showHoney();

let baz = Object.create(Bee).init('Donkey');
baz.showHoney();
baz.makeHoney();
baz.makeHoney();
baz.makeHoney();
bar.showHoney();
baz.showHoney();

console.log(baz.constructor === Object);
