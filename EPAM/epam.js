// 1 сложение различных типов

console.log("string" + true);
console.log("string" + 4);
console.log(5 + true);

// 2 умножение различных типов

console.log("string" * true);
console.log("string" * 4);
console.log(5 * true);

// 3 деление различных типов

console.log("string" / true);
console.log("string" / 4);
console.log(5 / true);

// 4 явное преобразование

console.log(Number("20"));
console.log(String(false));
console.log(Boolean(1));

//////////////////////////////////

let car = {
    color: "черный",
    power: function () {
        console.log("Мощность двигателя");
    }
};
car.color = "зеленый";
//console.log(car.color);
car.power();


function sum(груши, яблоки) {
    return (груши + яблоки);
}
let result = sum(4, 5);
console.log(result);


function nameChacker(checkName) {
    if (checkName == 'Aleks') {
        console.log('Привет Aleks');
    } else {
        console.log('Нет такого имени');
    }
}
nameChacker('Aleks');

function typeArg (arg){
    console.log(typeof(arg));
}
typeArg('argument');

function simpleNum(num) {
    result = true;
    if (num <= 1) {
        result = false;
    }else{
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            result = false;
            break;
        }
    }
}
    console.log(result);
}
simpleNum(1);


//////////////////////////////////////////////////////////////

let arrayFilms = ['Ведьмак', 'Довод', 'Человек паук', 'Матрица',
 'Тьма', 'Сноуден', 'Спарта'];
//  console.log(arrayFilms);


let arrayCar = ['BMW', 'Audi', 'Opel', 'Renault', 'Mazda', 'Mini'];


let arrayName = ['Ksenia', 'Ivan', 'Mihail', 'Dmitri', 'Gleb', 'Ylia'];


let arrayNum = [1, 6, 7, 8, 3, 4, 5, 6];
