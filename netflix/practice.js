var username = ["afnan", "noman", "affan"];
console.log(username);
username.push("ali");
username.push("anus");
username.push("osman");
username.push("raza");
// username.reverse();
// username.pop("osman")

for (const iterator of username) {
  console.log(iterator);
}

var filval = (x) => {
  if (x == "afnan") {
    return true;
  } else {
    return false;
  }
};
console.log(username.filter(filval));

var copynamear = username.map((a) => {
  return a;
});
console.log("copy name array " + copynamear);

var num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

for (let index = 0; index < num.length; index++) {
  const element = num[index];
  console.log(element ** 2);
}

var usernameobj = { name: "afnan", sibling1: "noman", sibling2: "affan" };

for (const key in usernameobj) {
  const val = usernameobj[key];
  console.log(key, val);
}
var nr = num.slice(20, 23);
console.log(nr);

var fac = [1, 2, 3, 4, 5, 6];

var facto = (x, y) => {
  return x * y;
};

console.log(fac.reduce(facto) + " reduce wala ");

var fact = 1;
for (let i = 1; i <= fac.length; i++) {
  fact = fact * i;
}
console.log(fact + " loop wala");

var heading = "Generate business name ";

var rand = Math.random();
let first, second, third;

if (rand < 0.33) {
  first = "habib";
} else if (rand < 0.55) {
  first = "khizar";
} else {
  first = "mill";
}

if (rand < 0.33) {
  second = "oil";
} else if (rand < 0.88) {
  second = "steel";
} else {
  second = "soft";
}

if (rand < 0.33) {
  third = "mill";
} else if (rand < 0.66) {
  third = "pvt";
} else {
  third = "ltd";
}

console.log("Your business name" + ` ${first} ${second}  ${third} `);

// console.log("this is 1st");
// console.log("this is 2nd");
// setTimeout(() => {
//   console.log("this is 3rd ");
// }, 3000);
// console.log("this is 4th");

// console.log("this is promise");

// let promise1 = new Promise((resolve, reject) => {
//   let time = Math.random();
//   if (time < 0.4) {
//     reject("Random no is less than 0.4 which is err");
//   } else {
//     setTimeout(() => {
//       resolve("By promise 1");
//     }, 3000);
//   }
// });
// let promise2 = new Promise((resolve, reject) => {
//   let time = Math.random();
//   if (time < 0.4) {
//     reject("Random no is less than 0.4 which is err 2");
//   } else {
//     setTimeout(() => {
//       resolve("By promise 2");
//     }, 5000);
//   }
// });
// let promise3 = new Promise((resolve, reject) => {
//   let time = Math.random();
//   if (time < 0.4) {
//     reject("Random no is less than 0.4 which is err 3");
//   } else {
//     setTimeout(() => {
//       resolve("By promise 3");
//     }, 1000);
//   }
// });

// let promres = Promise.race([promise1, promise2, promise3]);
// promres
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function getdata() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise Resolved");
//     }, 3500);
//   });
// }

// async function getdata() {
//   let x = await fetch("https://jsonplaceholder.typicode.com/todos/101");
//   let y = await x.text();
//   console.log(y);
// }

// async function postdata() {
//   let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "Data 1",
//       body: "ala ha",
//     }),

//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });

//   let postdata = await x.json();
//   return postdata;
// }

// async function main() {
//   console.log("loading Modules");

//   console.log("loading data");

//   console.log("Processing data");
//   let data = await getdata();
//   console.log(data);
//   let pdata = await postdata();
//   console.log(pdata);

// data.then((v) => {
//   console.log("Task 1");
//   console.log("Task 2");
//   console.log("Task 3");
// });
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// }
// main();

// console.log("loading Modules");

// console.log("loading data");

// console.log("Processing data");
// let data = getdata();
// console.log(data);

// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// let a = prompt("Enter first Number");
// let b = prompt("Enter second Number");
// let sum = parseInt(a) + parseInt(b);

// if (isNaN(a) || isNaN(b)) {
//   alert(SyntaxError("Only number is allowed"));
// } else {
//   try {
//     alert("your sum is " + sum - x);
//   } catch (error) {
//     alert("bhai x nhi ha");
//   } finally {
//     alert("bhai bhand mar dya");
//   }
// }

// let obj = {
//   id: 10,
//   name: "afnan",
// };

// console.log(obj);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;

// class Animal {
//   constructor(name) {
//     this.name = name;
//     console.log("Object is creating.....");
//   }

//   eats() {
//     console.log("kha raha hoon");
//   }

//   jumps() {
//     console.log("kood raha hoon");
//   }
// }

// class Lion extends Animal {
//   constructor(name) {
//     super();
//     this.name = name;
//     console.log("Object is creating and he is lion.....");
//   }

//   eats() {
//     super.eats();
//     console.log("kha raha hoon or roar rha hoon");
//   }
// }

// let a = new Animal("cat");
// console.log(a);

// let l = new Lion("sheer");
// console.log(l);
// "https://jsonplaceholder.typicode.com/todos/20"
// "https://jsonplaceholder.typicode.com/posts"
// headers: {
//   "Content-type": "application/json; charset=UTF-8",
// },

// async function getData() {
//   let x = await fetch("https://jsonplaceholder.typicode.com/todos");
//   let y = await x.json();
//   console.log(y);
// }

// async function postData() {
//   let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "Money heist all seasons",
//       compeleted: true,
//     }),

//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   let y = await x.json();
//   console.log(y);
// }

// async function main() {
//   console.log("Loading module...");
//   console.log("Loading Data...");
//   console.log("Loading ...");
//   getData();
//   postData();
// }

// main();

function list() {
  console.log("honda");
  console.log("alto");
  console.log("civic");
}

list();

let students = ["Afnan khan", "Nomani", "Affani", "Ali", "Anas"];
let Home = [];
console.log(students);

for (const stu of students) {
  if (stu.length < 6) {
    Home.push("Small Home" + stu);
  } else if (stu.length < 8) {
    Home.push("Medium Home" + stu);
  } else if (stu.length <= 10) {
    Home.push("Big Home" + stu);
  } else {
    Home.push("None" + stu);
  }
}
console.log(Home);

var data = "The ottoman Empire";
console.log(data);

// localStorage.setItem("series", data);

function sum(a, b) {
  x = a + b;
}
sum(7, 3);
console.log(" The Sum is", x);

pizzafla = ["Chiken tikka", "Chiken chess", "Chiken fajita", " chiken sharma"];

function filterr(pizzafla) {
  if (pizzafla == "Chiken tikka") {
    return true;
  } else {
    return false;
  }
}

console.log(pizzafla.filter(filterr));

pizzaa = [
  {
    id: 10014,
    flavour: "chiken chezy",
    size: "Large",
    type: "crust",
  },
  {
    id: 10015,
    flavour: "chiken tikka",
    size: "x-Large",
    type: "stuff",
  },
  {
    id: 10016,
    flavour: "chiken afghani",
    size: "midium",
    type: "stuff",
  },
];

let filteredpizzaa = pizzaa.filter((pizzaa) => {
  return pizzaa.id == 10015;
});

console.log(filteredpizzaa);

for (const key in pizzaa) {
  let val = pizzaa[key];

  console.log(val);
}

// Report Card
marks = [50, 60, 70, 80, 90, 100];

//Calc Sum
function sum2() {
  let res = 0;
  for (let i = 0; i < marks.length; i++) {
    let res2 = marks[i];
    res = res + res2 / marks.length;
  }
  // return console.log(res + "%");
}
sum2();

//Calc Grade
function grade(mark) {
  if (mark == 100) {
    return "A++";
  } else if (mark >= 90) {
    return "A";
  } else if (mark >= 80) {
    return "B";
  } else if (mark >= 70) {
    return "C";
  } else if (mark >= 60) {
    return "D";
  } else {
    return "F";
  }
}
// console.log(grade(52));
// grade(85);

function hasPassed(score) {
  if (
    grade(score) == "A++" ||
    grade(score) == "A" ||
    grade(score) == "B" ||
    grade(score) == "C" ||
    grade(score) == "D"
  ) {
    return true;
  } else {
    return false;
  }
}
// console.log(hasPassed(62));

function getAverage(score) {
  let sum = 0;

  for (const i of score) {
    sum = sum + i;
  }
  return sum / score.length;
}

function studentMsg(totalscores, studentscore) {
  if (hasPassed(totalscores) != "F") {
    return (
      " Class average: " +
      getAverage(totalscores) +
      "" +
      " Your grade: " +
      grade(studentscore) +
      " You passed the course. "
    );
  } else {
    return (
      " Class average: " +
      getAverage(totalscores) +
      "" +
      " Your grade: " +
      grade(studentscore) +
      " You failed the course. "
    );
  }
}
console.log(studentMsg([92, 88, 57, 67, 38], 60));

items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
itms = [];

let res = items.slice(0, 5);
// let res2 = itms.push(res);
console.log("slice methods : " + res);

items1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
itms2 = [];
let res1 = items1.splice(0, 5);
console.log("splice methods : " + items1);

console.log(Math.floor(Math.random() + 1));

fac_num = [1, 2, 3, 4, 5];
let fac_res = 1;
for (let x = 1; x <= fac_num.length; x++) {
  fac_res = fac_res * x;
}
console.log("Factorial with loop " + fac_res);

function factt(fac) {
  let fac_res = 1;
  for (let x = 1; x <= fac.length; x++) {
    fac_res = fac_res * x;
  }
  console.log("Factorial with function " + fac_res);
}

factt([1, 2, 3, 4, 5, 6, 7]);

let a = "hello";
console.log(a);
let b = "hello".replace(/l/g, "lllllll");
console.log(b);



