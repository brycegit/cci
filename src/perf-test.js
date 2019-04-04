const LL = require("./linked-list");

let arr = new Array();
let ll = new LL();
let set = new Set();

const itemCount = 10000000;

const num = 1000000;

memoryTest();
console.log("----------------");
findTest();
console.log("----------------");
deleteTest();

function memoryTest() {
  console.log("<Memory>");
  setupArr(itemCount);
  console.log("array:", getMemoryUsage() + "mb");
  clearAll();

  setupLL(itemCount);
  console.log("linked list:", getMemoryUsage() + "mb");
  clearAll();

  setupSet(itemCount);
  console.log("set:", getMemoryUsage() + "mb");
  clearAll();
}

function findTest() {
  console.log("<Find Speed>");
  setupArr(itemCount);
  setupLL(itemCount);
  setupSet(itemCount);

  const num = 999000;

  console.time("array");
  arr.find(n => n === num);
  console.timeEnd("array");

  console.time("linked list");
  ll.find(num);
  console.timeEnd("linked list");

  console.time("set");
  set.has(num) ? num : null;
  console.timeEnd("set");
}

function deleteTest() {
  console.log("<Delete Speed>");
  console.time("array");
  deleteFromArray(arr, num);
  console.timeEnd("array");

  console.time("linked list");
  deleteFromLL(ll, num);
  console.timeEnd("linked list");

  console.time("set");
  deleteFromSet(set, num);
  console.timeEnd("set");
}

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

function getMemoryUsage() {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  return Math.round(used * 100) / 100;
}

function clearAll() {
  arr = new Array();
  set = new Set();
  ll = new LL();
  global.gc();
}

function setupArr(itemCount) {
  for (let index = 0; index < itemCount; index++) {
    arr.push(index);
  }
}

function setupLL(itemCount) {
  for (let index = 0; index < itemCount; index++) {
    ll.add(index);
  }
}

function setupSet(itemCount) {
  for (let index = 0; index < itemCount; index++) {
    set.add(index);
  }
}
