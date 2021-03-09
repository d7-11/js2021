

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