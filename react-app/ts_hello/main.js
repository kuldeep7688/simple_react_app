// function log(message) {
//   console.log(message);
// }
// var message = "Hello World";
// log(message);
var number = 6;
var number2 = 7;
function DoSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //   console.log("Finally : " + i);
}
DoSomething();
var count = 5;
// count = "a";
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
// let f: any[] = [1, true, 'a', 'false']  dont use
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var backGroundColor = Color.Blue;
