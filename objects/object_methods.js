// let me = {
//   firstName: 'Jane',
//   lastname: 'Doe',
// };
//
//
let me = {};
me.firstName = 'Jane';
me.lastName = 'Doe';
me.id = 0;

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

// fullName(me);

let friend = {
  firstName: 'John',
  lastName: 'Smith',
  id: 1,
};

// fullName(friend);

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
  id: 2,
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
  id: 3,
};

// fullName(mother);
// fullName(father);

// let people = [];
//
// people.push(me);
// people.push(friend);
// people.push(mother);
// people.push(father);
//
// function rollCall(collection) {
//   collection.forEach(fullName);
// }

// rollCall(people);

let currentId = 3;

let people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(people.fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    person.id = currentId++;

    this.collection.push(person);
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
            index = i;
      }
    });

    return index;
  },

  remove: function(person) {
    let index;
    if (this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string'
        || typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

people.collection.forEach((person) => {
  console.log(person);
});

people.add({ firstName: 'Barton', lastName: 'Millsworth' });
console.log();
people.collection.forEach((person) => {
  console.log(person);
});
