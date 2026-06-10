console.log("This is new terminal...");

// ================= BASICS =================
let age = 45;

if (age > 18) {
    console.log("You can drive");
} else {
    console.log("You are not eligible");
}

let a = 13;
let b = 12;
let c = 11;
const d = 12;

console.log(a + b + c);
console.log(a + b * c);
console.log(typeof a, typeof d);

// ================= LOOP =================
for (let i = 0; i < 100; i++) {
    console.log(i);
}

// ================= FUNCTION =================
function good(name) {
    console.log("Hey " + name + " You are good");
    console.log("Hey " + name + " You are good person");
    console.log("Hey " + name + " You are good looking");
    console.log("Hey " + name + " You are brave boy");
}

good("Zain");
good("Ahmad");

// ================= ARRAYS =================
let arr = [1, 2, 3, 4, 5, 6];

console.log(arr);
console.log(arr.length);

console.log(arr[0]);
console.log(arr[3]);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

console.log(a1.concat(a2, a3));

let newArr = [2, 3, 4];
newArr.push("Zain");
newArr.unshift("Khan");

console.log(newArr);

for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
}

// ================= MAP / FILTER =================
let nums = [10, 20, 30, 40, 50];

let doubleNums = nums.map((n) => {
    return n * 2;
});

console.log(doubleNums);

let evenNums = nums.filter((n) => {
    return n % 2 === 0;
});

console.log(evenNums);

// ================= OBJECTS =================
let products = [
  { name: "phone", price: 500 },
  { name: "laptop", price: 1000 },
  { name: "mouse", price: 20 }
];

let expensive = products.filter((p) => p.price > 100);

console.log(expensive);