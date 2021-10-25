function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  console.log(this.firstName + ' ' + this.lastName);
};

Person.prototype.communicate = function() {
  console.log('Communication');
}

Person.prototype.eat = function() {
  console.log("Yum.");
}

Person.prototype.sleep = function() {
  console.log("Bed time!");
};

// const genericPerson = new Person('Heather', 'McGonagul', 23, 'F');
//
// genericPerson.fullName();
// genericPerson.communicate();
// genericPerson.eat();
// genericPerson.sleep();

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

// Object.setPrototypeOf(Doctor.prototype, Person.prototype);
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.diagnose = function() {
  console.log('Looks healthy!');
}

// const doc = new Doctor('Jerry', 'Baker', 57, 'M', 'Oncology');
// doc.diagnose();
// doc.fullName();
// doc.communicate();
// doc.eat();
// doc.sleep();
// console.log(doc.specialization);

function Professor(...args) {
  Person.apply(this, args);
  this.subject = args[args.length - 1];
}

// Object.setPrototypeOf(Professor.prototype, Person.prototype);
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function() {
  console.log('Open your books to page 48.');
}

const prof = new Professor('Mathilda', 'Norman', 42, 'F', 'History');
// prof.fullName();
// prof.communicate();
// prof.eat();
// prof.sleep();
// prof.teach();
// console.log(prof.subject);

function Student(...args) {
  Person.apply(this, args);
  this.degree = args[args.length - 1];
}

// Object.setPrototypeOf(Student.prototype, Person.prototype);
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
  console.log('Need more coffee.');
}

// const student = new Student('Simon', 'Rockwell', 19, 'M', 'Physics');
// student.fullName();
// student.communicate();
// student.eat();
// student.sleep();
// student.study();
// console.log(student.degree);

function GradStudent(...args) {
  Student.apply(this, args.slice(0, args.length - 1));
  this.graduateDegree = args[args.length - 1]
}

// Object.setPrototypeOf(GradStudent.prototype, Student.prototype);
GradStudent.prototype = Object.create(Student.prototype);
GradStudent.prototype.constructor = GradStudent;
GradStudent.prototype.research = function() {
  console.log('Pouring over the data.');
}

const gradStudent = new GradStudent('Makena', 'Jimenez', 24, 'F', 'Statistics', 'Computer Science');

console.log(gradStudent instanceof Person);
console.log(gradStudent instanceof Student);
console.log(gradStudent instanceof GradStudent);

// gradStudent.fullName();
// gradStudent.communicate();
// gradStudent.eat();
// gradStudent.sleep();
// gradStudent.study();
// console.log(gradStudent.degree);
// gradStudent.research();
// console.log(gradStudent.graduateDegree);



// ES6 class syntax ------------------------------

// class Person {
//   constructor(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }
//
//   fullName() {
//     console.log(this.firstName + ' ' + this.lastName);
//   }
//
//   communicate() {
//     console.log('Communication');
//   }
//
//   eat() {
//     console.log("Yum.");
//   }
//
//   sleep() {
//     console.log("Bed time!");
//   }
// }
//
// // const genericPerson = new Person('Heather', 'McGonagul', 23, 'F');
// //
// // genericPerson.fullName();
// // genericPerson.communicate();
// // genericPerson.eat();
// // genericPerson.sleep();
//
// class Doctor extends Person {
//   constructor(firstName, lastName, age, gender, specialization) {
//     super(firstName, lastName, age, gender);
//     this.specialization = specialization;
//   }
//
//   diagnose() {
//     console.log('Looks healthy!');
//   }
// }
//
// // const doc = new Doctor('Jerry', 'Baker', 57, 'M', 'Oncology');
// // doc.diagnose();
// // doc.fullName();
// // doc.communicate();
// // doc.eat();
// // doc.sleep();
// // console.log(doc.specialization);
//
// class Professor extends Person {
//   constructor(...args) {
//     super(...args);
//     this.subject = args[args.length - 1];
//   }
//
//   teach() {
//     console.log('Open your books to page 48.');
//   }
// }
//
// // const prof = new Professor('Mathilda', 'Norman', 42, 'F', 'History');
// // prof.fullName();
// // prof.communicate();
// // prof.eat();
// // prof.sleep();
// // prof.teach();
// // console.log(prof.subject);
//
// class Student extends Person {
//   constructor(...args) {
//     super(...args);
//     this.degree = args[args.length - 1];
//   }
//
//   study() {
//     console.log('Need more coffee.');
//   }
// }
//
// // const student = new Student('Simon', 'Rockwell', 19, 'M', 'Physics');
// // student.fullName();
// // student.communicate();
// // student.eat();
// // student.sleep();
// // student.study();
// // console.log(student.degree);
//
// class GradStudent extends Student {
//   constructor(...args) {
//     super(...args.slice(0, args.length - 1));
//     this.graduateDegree = args[args.length - 1]
//   }
//
//   research() {
//     console.log('Pouring over the data.');
//   }
// }
//
// const gradStudent = new GradStudent('Makena', 'Jimenez', 24, 'F', 'Statistics', 'Computer Science');
//
// console.log(gradStudent instanceof Person);
// console.log(gradStudent instanceof Student);
// console.log(gradStudent instanceof GradStudent);
//
// gradStudent.fullName();
// gradStudent.communicate();
// gradStudent.eat();
// gradStudent.sleep();
// gradStudent.study();
// console.log(gradStudent.degree);
// gradStudent.research();
// console.log(gradStudent.graduateDegree);
