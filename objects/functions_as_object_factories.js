// function makeCar(rate, brakeRate) {
//   return {
//     speed: 0,
//     rate,
//     brakeRate,
//     accelerate() {
//       this.speed += this.rate;
//     },
//     brake() {
//       this.speed -= this.brakeRate;
//       if (this.speed < 0) {
//         this.speed = 0;
//       }
//     },
//   };
// }
//
// let sedan = makeCar(8, 6);
// sedan.accelerate();
// sedan.speed;
//
// let coupe = makeCar(12, 6);
// coupe.accelerate();
// coupe.speed;
//
// let hatchback = makeCar(9, 6);

function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      let haveOrHavent = this.visited ? 'have' : "haven't"
      return this.name + ' is located in ' + this.continent +
             `. I ${haveOrHavent} visited ${this.name}`;
    },
    visitCountry() {
      this.visited = true;
    },
  }
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(
canada.getDescription(), // "Canada is located in North America. I haven't visited Canada."
);

canada.visitCountry();

console.log(
canada.getDescription(), // "Canada is located in North America. I have visited Canada."
);


chile.getDescription();       // "The Republic of Chile is located in South America."
canada.getDescription();      // "Canada is located in North America."
southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."
