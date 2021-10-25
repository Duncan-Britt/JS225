// The OLOO (Object Linking to Other Object) Pattern;

let Point = {             // capitalized name for the prototype as a convention
  onXAxis() {             // shared methods defined on the prototype
    return this.y === 0;
  },

  onYAxis() {
    return this.x === 0;
  },

  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init(x, y) {            // optional init method to set states
    this.x = x;
    this.y = y;
    return this;
  },
};

let pointA = Object.create(Point).init(30, 40);

Point.isPrototypeOf(pointA);        // use isPrototypeOf to check type

pointA.distanceToOrigin();          // 50
pointA.onXAxis();                   // false
