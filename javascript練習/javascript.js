// console.log(1);

// console.log(1 + 1);

// const total = 42 + 42;
// console.log(total);

// console.log(typeof true);

// console.log(Number.MAX_SAFE_INTEGER);

// console.log(
//   `これは
//  複数行の
//  文章です`
// );

// const str = "文字列";
// console.log(`これは${str}です`);

// // const obj = {};

// const obj = {
//   key: "value",
// };

// console.log(obj.key);

// console.log(obj["key"]);

// const str = new String("文字列");

// console.log(typeof str);

// console.log(str.length);

function double(num) {
  return num * 2;
}

console.log(double(10));

function echo(x) {
  return x;
}

console.log(echo(1));
console.log(echo());

function argumentsToArray(x, y) {
  return [x, y];
}

console.log(argumentsToArray(1, 2));
console.log(argumentsToArray(1));
console.log(argumentsToArray(1, 2, 3));

function echo(x = "デフォルト値") {
  return x;
}

console.log(echo(1));
console.log(echo());

const max = Math.max(1, 5, 6, 20, 80, 3, 4);

console.log(max);

function fn(...args) {
  console.log(args);
}

fn("a", "b", "c");

const version = "ES8";
switch (version) {
  case "ES5":
    console.log("ECMAScript 5");
    break;
  case "ES6":
    console.log("ECMAScript 2015");
    break;
  case "ES7":
    console.log("ECMAScript 2016");
    break;
  default:
    console.log("しらないバージョンです");
    break;
}
