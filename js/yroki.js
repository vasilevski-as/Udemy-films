let num = 20;

function showFirstMes(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}
showFirstMes('Hello Ukraine');
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));

function ret() {
    let num = 15;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("Ukraine");
};
logger();

const calc1 = (a, b) => a + b;

const str = ("Test");
const arr = [1, 4, 8];
console.log(str.length);
console.log(arr.length);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("i"));
console.log(fruit.slice(4, 10));

const num11 = 12.2;
console.log(Math.round(num11));

const pxx = "12.3px";
console.log(parseInt(pxx));

function first() {
    setTimeout(function () {
        console.log(1);
    }, 1000);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел урок');
}

learnJS('JavaScript', done);

const options = {
    name: 'test',
    wight: 1024,
    hight: 1024,
    color: {
        border: 'black',
        bg: 'red'
    }
};
// console.log(options.name);
// delete options.name;
// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

const {
    border,
    bg
} = options.color;
console.log(bg, border);


const ar = [1, 2, 3, 5, 7];
ar.pop();
ar.push(22);
ar[5] = 0;
console.log(ar);

ar.forEach(function (it, i, ar) {
    console.log(`${i}: ${it} внутри масива ${ar}`);
});

for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}
for (let value of ar) {
    console.log(value);
}

const strr = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));

function copy(mainObj) {
    let newObj = {};
    let key;

    for (key in mainObj) {
        newObj[key] = mainObj[key];
    }

    return (newObj);
}

const numbers1 = {
    a: 2,
    b: 5,
    c: {
        x: 10,
        y: 7
    }
};
const newNumbers1 = copy(numbers1);
newNumbers1.a = 12;
newNumbers1.c.y = 14;
console.log(newNumbers1);
console.log(numbers1);

const add = {
    d: 17,
    e: 21
};

console.log(Object.assign(numbers1, add));
console.log(Object.assign({}, add));


const array = ['a', 'b', 'c'];
const newArray = array.slice();
array[1] = 2;
console.log(newArray);
console.log(array);


const video = ['youtube', 'vimeo', 'rutybe'],
    blogs = ['wordpress', 'lifejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'telegram'];
console.log(internet);


function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num2 = [2, 5, 7];
log(...num2);


const array2 = ["a", "b"];
const newArray2 = [...array2];
console.log(newArray2);

const q = {
    one: 1,
    two: 2
};
const newObje = {...q};
console.log(newObje);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('hello');
            }
};

const jonh = Object.create(soldier);
jonh.sayHello();

// types of data

//to string

console.log(typeof(String(null)));
console.log(typeof(String(4)));

console.log(typeof(5 + ''));

//to number

console.log(typeof(Number('4')));

console.log(typeof( + '5'));

console.log(typeof(parseInt("15px", 10)));   //10я система исчисления

//to boolean

// 0, "", null, undefined, NaN

let switcher = null;
if (switcher){
    console.log('working...');
}
switcher = 1;
if (switcher){
    console.log('working..');
}

console.log(typeof(Boolean('4')));

console.log(typeof(!!"444444"));