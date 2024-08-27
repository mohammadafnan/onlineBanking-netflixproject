var a = "Afnan";
console.log(a);

for (let i = 0; i < 10; i++) {
  console.log(i * 10);
}

let obj = {
  name: "Anas",
  city: "karachi",
  country: "Pakistan",
};

for (const key in obj) {
  const element = obj[key];
  console.log(key, element);
}

for (const c of "Muhammad Afnan umer") {
    console.log(c);
}

// i = 19;
// while (i < 20) {
//     console.log(i)
//     i++;
    
// }

j = 15;

do {
    console.log(j)
    j++;  
} while (j < 20);