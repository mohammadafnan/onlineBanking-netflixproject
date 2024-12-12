// function add(a:number,b:number) {
//  console.log(a + b);
// }

// add(5,10);

var data1 = 100;
let data2 = 15;
const val = 10;

function fac1() {
  this.data1 = 1000;
  console.log(this.data1);
  console.log(val);
}
this.data1 = 1100;
console.log(this.data1);

function fac2() {
  this.data2 = 150;
  console.log(this.data2);
  console.log(val);
}

// this.data2 = 1500;
// console.log(this.data2);

fac1();
fac2();

type objtype = {
  name: string;
  age: number;
};

let obj: objtype = {
  name: "afnan",
  age: 30,
};

console.log(obj);

let arr: string[] = ["java", "javascript", "html", "css"];
console.log(arr);

arr[2] = "sql";
console.log(arr);

arr.push("php");
console.log(arr);

arr.unshift("py");
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.length);

enum role {
  Admin,
  Manager,
  Assisstant,
}

console.log(role);

function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(add(20, 30));
console.log(add("Mohammad", "Afnan"));

class car {
  carname = "";
  carcolor = "";

  car(cname, ccolor) {
    return "Car name is" + " " + cname + " " + "car color is" + " " + ccolor;
  }
}

const cardetail = new car();

// cardetail.car("Sonata", "black");
console.log(cardetail.car("Sonata", "black"));

class uname {
  private uname = "";

  setname(name) {
    this.uname = name;
  }
  display() {
    console.log(this.uname);
    this.usernamelength();
  }
  private usernamelength() {
    console.log(this.uname.length);
  }
  //  usernamelength();
}

const userde = new uname();

userde.setname("usama");
// userde.uname="afnan";
userde.display();
// userde.usernamelength();

class user {
  constructor(public name, public age, public email) {}

  show() {
    console.log(this.name, this.age, this.email);
  }
}
const u = new user("osama", 30, "osama@gmail.com");
u.show();

class u2 {
  readonly name = "adil";
}
const u3 = new u2();
// u3.name = "asd"
console.log(u3.name);


