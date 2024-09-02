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
