// Array.from(Array(length), (x, index) => start + index * step);
const LL = require("./linked-list");

// empty arr
const arr = [];
// empty ll
const ll = new LL();
// empty map
const set = new Set();

// populate each with 1MM values
for (let index = 0; index < 1000000; index++) {
  // add to each
  arr.push(index);
  ll.add(index);
  set.add(index);
}

const num = 999000;

console.time("array find");
arr.find(n => n === num);
console.timeEnd("array find");

console.time("linked list find");
ll.find(num);
console.timeEnd("linked list find");

console.time("set find");
set.has(num) ? num : null;
console.timeEnd("set find");

console.log("----------------");

console.time("array delete");
deleteFromArray(arr, num);
console.timeEnd("array delete");

console.time("linked list delete");
deleteFromLL(ll, num);
console.timeEnd("linked list delete");

console.time("set delete");
deleteFromSet(set, num);
console.timeEnd("set delete");

function deleteFromArray(arr, num) {
  return arr.filter(n => n !== num);
}

function deleteFromSet(set, num) {
  set.delete(num);

  return set;
}

function deleteFromLL(ll, num) {
  ll.remove(num);

  return ll;
}
