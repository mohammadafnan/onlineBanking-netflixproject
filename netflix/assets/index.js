var a = 50;
var b = 100;
console.log("The sum  is  " + (a + b));
console.log("The sum  is  " + (a + b + 100));
console.log(typeof a, typeof b);
// var c = prompt("Enter you name");
// console.log("This is your name " + c);

// var d = confirm("Are you want to learn javascript ");
// if (d) {
//   console.log("you are enrolled");
// } else {
//   console.log("you are not enrolled");
// }
const e = 77;
console.log("is is constant value" + e);

{
  let a = 55;
  console.log(a);
}
console.log(a);

var x = "afnan";
var y = 100;
var z = true;
var i = undefined;
var j = null;
console.log(x, y, z, i, j);
console.log(typeof x, typeof y, typeof z, typeof i, typeof j);

let obj = {
  name: "Anas",
  job: "on job",
};
console.log(obj);
obj.salary = "100000";
console.log(obj);
obj.country = "pakistan";
console.log(obj);

let age = 26;

if (age >= 25) {
  console.log("You can drive");
} else {
  console.log("You can not drive");
}

a = 100;
b = 20;
c = a < b ? a + b : a - b;

console.log(c);

// for (let x = 0; x <= 100 ; x++) {
//   console.log(x)
// }

// y = 0
// while(y < 10){
//   console.log(y);
//   y++;
// }

z = 0;
do {
  console.log(z);
  z++;
} while (z < 10);

function giveName(name) {
  console.log("Hey  " + name + " you are good");
  console.log("Hey  " + name + " harry you are nice");
  console.log("Hey  " + name + " harry you are awesome");
  console.log("Hey  " + name + " harry you are handsome");
  console.log("Hey  " + name + " harry you are sharp");
}

giveName("afnan");

const func1= (y) =>{
   console.log("this is value of y : ",y);
}
func1(55)
func1(100)
func1(88)


var i = prompt("Enter First Number")
var j = prompt("Perfrom Operation")
var k = prompt("Enter Second Number")
j = obj[j]

let obj = {
"+":"+",
"-":"-",
"*":"*",
"/":"/",

}