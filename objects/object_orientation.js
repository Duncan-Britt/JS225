// function makeVehicle(fuel, mpg) {
//   return {
//     fuel,
//     mpg,
//     range() {
//       return this.fuel * this.mpg;
//     },
//   };
// }
//
// let smallCar = makeVehicle(7.9, 37);
// smallCar.range();   // 292.3
//
// let largeCar = makeVehicle(9.4, 29);
// largeCar.range();   // 272.6
//
// let truck = makeVehicle(14.4, 23);
// truck.range();      // 331.2

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice(newPrice) {
      if (price < 0) {
        console.log('Invalid price');
      }

      this.price = newPrice;
    },
    describeProduct() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);
    },
  };
}


let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let handSaw = createProduct(2, 'Hand Saw', 12, 2);
let hammer = createProduct(3, 'Hammer', 4, 8);

scissors.describeProduct();
