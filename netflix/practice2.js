// hoisting concept all decleration move to top of the scope///
console.log(a); ////first its not defined then undefined
var a; ////undefined
a = 10; ////undefined
console.log(a);

let b;
b = 20;
console.log(b);

if (true) {
  let b = 30;
  console.log(b);
}

console.log(b);

const c = 10;
console.log(c);

console.log(x);
console.log(y);
var y;
var x = (y = "emp");

var i = 5;
console.log(i);
console.log(--i);

console.log(3 > 2 > 1);
console.log(1 < 2 < 3);

const foo = function () {
  console.log(this.name);
};
foo.call({ name: "javascript" });

const user = {
  id: 1,
  courseName: "javascript",
  courseCode: 3001,
};


console.log(user)
console.log(user.id)


Object.defineProperties(user,{id:{writable:false}});
Object.defineProperties(user,{courseName:{writable:false}});

user.id = 20
console.log(user)
user.courseName = "java"
console.log(user)
 

const sli = [1,2,3,4,5]
const sli1 = sli.slice(0,4); /// return new array from an existing array and it takes two parameters start and ending index
console.log(sli1);

const spi = [1,2,3,4,5]
spi.splice(1,4)/// return (removing,adding)array values  from an existing array and it takes two or there parameters start index and how much item remove and how much add item
console.log(spi);


const sort = [1,3,2,5,4]
sort.sort()/// return (removing,adding)array values  from an existing array
console.log( "Sorted array " + sort);