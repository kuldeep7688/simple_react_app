// function log(message) {
//   console.log(message);
// }

// var message = "Hello World";

// log(message);

var number = 6;
let number2 = 7;

function DoSomething() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  //   console.log("Finally : " + i);
}

DoSomething();

let count = 5;
// count = "a";

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, 'a', 'false']  dont use

enum Color {
  Red = 0,
  Green = 1,
  Blue = 3,
}
let backGroundColor = Color.Blue;

let message = "abc";
let endsWithC = message.endsWith("c");

let message2;
message2 = "abc";
let endsWithC2 = (<string>message2).endsWith("c");
let endsWithC3 = (message2 as string).endsWith("c");

let log = function (message) {
  console.log(message);
};

const dolog = (message: string) => {
  console.log(message);
};

let drawPoint = (point: { x: number; y: number }) => {
  //
};

drawPoint({
  x: 1,
  y: 2,
});

interface Point {
  x: number;
  y: number;
}

let drawPoint2 = (point: Point) => {
  //
};

drawPoint2(1, 3);

class Pointc {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log("X: " + this.x + ", Y: " + this.y);
  }

  getDistance(another: Pointc) {
    //
  }
}

// let pointco = new Pointc();
// pointco.x = 1;
// pointco.y = 2;
// pointco.draw();

// using constructor
// let pointco = new Pointc(1, 2);
let pointco = new Pointc();
pointco.draw();

// access modifiers
// public (default)
// private (use when you dont want things to change like the params or the methods)
// protected

class Pointc2 {
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    console.log("X: " + this._x + ", Y: " + this._y);
  }

  getX() {
    return this._x;
  }

  setX(value: number) {
    if (value < 0) {
      throw new Error("value cannot be less than zero");
    } else {
      this._x = value;
    }
  }

  getDistance(another: Pointc) {
    //
  }
}
