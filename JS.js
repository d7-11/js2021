/* esversion:6 */
/*
// 1
let obj = {
 a: 1,
 b: 2,
 c: 3
};

let d = Symbol("d");
obj[d] = 4;
console.log(obj[d]);

for (let key in obj) {
  console.log(key)
} 

// 2
let printMark = Symbol("printMark");

obj[printMark] = function print() {
  
  console.log("!")
}

obj[printMark](); 



//3

let printKey = Symbol("printKey");

obj[printKey] = function print() {
  for (let key in this) {
    console.log(key)
  }
}
obj[printKey]();

//3.2
obj.sum = function() {
  let sum = 0;
  for (let value in Object.values(this)) {
    
    sum += +value;
  }
  console.log(sum)
};
obj.sum();

*/

//4
/*
let arr = [1, 2, 3];
let func = Symbol("func");

arr.func = function () { 
    let sum = 0;
  this.forEach(function(item, index, array) {
        sum = sum + (+item);
    console.log(item);
  })
 console.log(sum);
}

arr['func']();


//5

let arr = [1, 2, 3];
let func = Symbol.for("func");

arr.func = function () { 
    let sum = 0;
  this.forEach(function(item, index, array) {
        sum = sum + (+item);
  })
 console.log(sum);
}

arr['func']();
console.log(Symbol.keyFor(func));
*/

//6
/*
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


let getSumOfArr = Symbol.for("getSumOfArr");

Array.prototype[getSumOfArr] = function () {
    let sum = 0;
    this.forEach(function (item, index, array) {
        sum = sum + (+item);
    });

    return sum;
};

function createArray(arrLen, min, max) {
    let arr = [];
    for (let i = 0; i < arrLen; i++) {
        arr.push(randomInteger(min, max));
    }

    
    return arr;
}

let firstArr = createArray(10, 1, 10);
let secondArr = createArray(10, 1, 10);

function compareArrs(arr1, arr2) {

    let comparedArr = createArray(0);
    
    arr1.forEach(function (item1, index1, array1) {

        if (arr2.indexOf(item1) != -1 && comparedArr.indexOf(item1) === -1) {
            comparedArr.push(item1);
        }

    });
    return comparedArr;
}

let comparedArr = compareArrs(firstArr, secondArr);

console.log(firstArr);
console.log(secondArr);
console.log(comparedArr);
console.log("First arr sum : ", firstArr[getSumOfArr]())

console.log("Second arr sum : ", secondArr[getSumOfArr]())

console.log("Third arr sum : ", comparedArr[getSumOfArr]() );
*/


/* Напиши функцию конструктор Storage c функциями 
addItem(key, value), 
deleteItem(key), 
getAll(), 
removeAll() , 
lenght()

функция addItem(key , val) - должна сохранять в объекте Storage значение val c ключом key
getItem(key) - должна вернуть значение val по ключу key */

function Storage() {
    
    let privStrg = {};

    this.addItem = function(key, value) {
        privStrg[key] = value;
    };
    this.length = function() {
        return Object.keys(privStrg).length;
    };
    this.print = function () {
        for (key in privStrg) {
            console.log(key + ":" + privStrg[key]);
        }
    };
    this.removeAll = function() {
        privStrg = {};
    };
    this.getAll = function () {
        for (key in privStrg) {
            return (key + ":" + privStrg[key]);
        }
    }
}

let strg = new Storage();
strg.addItem("name", "Rob");
strg.addItem('age', 18);
console.log(strg);

console.log(strg.length());

strg.removeAll();

strg.addItem("sex",  "man");

console.log(strg);
strg.print();
console.log(strg.getAll());