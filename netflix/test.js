// function add(a:number,b:number) {
//  console.log(a + b);
// }
// add(5,10);
var data1 = 100;
var data2 = 15;
var val = 10;
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
var obj = {
  name: "afnan",
  age: 30,
};
console.log(obj);
var arr = ["java", "javascript", "html", "css"];
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
var role;
(function (role) {
  role[(role["Admin"] = 0)] = "Admin";
  role[(role["Manager"] = 1)] = "Manager";
  role[(role["Assisstant"] = 2)] = "Assisstant";
})(role || (role = {}));
console.log(role);
function add(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}
console.log(add(20, 30));
console.log(add("Mohammad", "Afnan"));
var car = /** @class */ (function () {
  function car() {
    this.carname = "";
    this.carcolor = "";
  }
  car.prototype.car = function (cname, ccolor) {
    return "Car name is" + " " + cname + " " + "car color is" + " " + ccolor;
  };
  return car;
})();
var cardetail = new car();
// cardetail.car("Sonata", "black");
console.log(cardetail.car("Sonata", "black"));
var uname = /** @class */ (function () {
  function uname() {
    this.uname = "";
    //  usernamelength();
  }
  uname.prototype.setname = function (name) {
    this.uname = name;
  };
  uname.prototype.display = function () {
    console.log(this.uname);
    this.usernamelength();
  };
  uname.prototype.usernamelength = function () {
    console.log(this.uname.length);
  };
  return uname;
})();
var userde = new uname();
userde.setname("usama");
// userde.uname="afnan";
userde.display();
// userde.usernamelength();
var user = /** @class */ (function () {
  function user(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  user.prototype.show = function () {
    console.log(this.name, this.age, this.email);
  };
  return user;
})();
var u = new user("osama", 30, "osama@gmail.com");
u.show();
var u2 = /** @class */ (function () {
  function u2() {
    this.name = "adil";
  }
  return u2;
})();
var u3 = new u2();
// u3.name = "asd"
console.log(u3.name);

/////////////Discount Finder Code .... //////
function checkdis() {
  var btn = document.getElementById("btn");
  var showdes = document.getElementById("desc");
  var price = document.getElementById("price");
  var discountprice = document.getElementById("discount");
  var coupondiscount = document.getElementById("Coupon");

  if (!price.value) {
    showdes.textContent = "Please Add Price";
    showdes.style.color = "white";
    showdes.style.backgroundColor = "red";
    showdes.style.marginTop = "10px";
    showdes.style.padding = "10px";
  } else if (coupondiscount.value == 2025) {
    discountprice.value = 100;
    var discountfind = price.value - (price.value * discountprice.value) / 100;
    /discount calc formular/;
    showdes.textContent =
      "Current price is " +
      price.value +
      " and You got Special Discount (Coupon code " +
       coupondiscount.value +
      " )" +
      discountprice.value +
      "% Discount " +
      " and your Discounted price is " +
      discountfind;
    showdes.style.color = "white";
    showdes.style.backgroundColor = "#1545c9";
    showdes.style.marginTop = "10px";
    showdes.style.padding = "10px";
    price.value = "";
    coupondiscount.value = "";
  } else {
    var discountfind = price.value - (price.value * discountprice.value) / 100;
    /discount calc formular/;

    showdes.textContent =
      "Current price is " +
      price.value +
      " and You got " +
      discountprice.value +
      "% Discount " +
      "and your Discounted price is " +
      discountfind;

    showdes.style.color = "white";
    showdes.style.backgroundColor = "green";
    showdes.style.marginTop = "10px";
    showdes.style.padding = "10px";
    price.value = "";
  }
}


