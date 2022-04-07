// 1 перебор массива с выводом в консоль каждого элемента
let arrayFilms = ['Ведьмак', 'Довод', 'Человек паук', 'Матрица',
 'Тьма', 'Сноуден', 'Спарта'];
// console.log(arrayFilms);
// for (let film of arrayFilms){
// console.log(film);
// }
for (let i = 0; i < arrayFilms.length; i++ ){
    console.log(arrayFilms[i]);    
}


// 2 преобразовать массив в строку и обратно
let arrayCar = ['BMW', 'Audi', 'Opel', 'Renault', 'Mazda', 'Mini'];
let arraySt = arrayCar.join('; ');    
console.log(arraySt);
let arrayCars = arraySt.split('; ');    
console.log(arrayCars);


// 3 добавить к каждому hello
let arrayName = ['Ksenia', 'Ivan', 'Mihail', 'Dmitri', 'Gleb', 'Ylia'];
let newArrayN = arrayName.map((i) => i+' hello');
console.log(newArrayN);


// 4 числовой массив в Boolean
function numBool (array){
    let newArray = array.map((i) => Boolean(i));
    console.log(newArray);
}
numBool([0, 6, 7, 8, 55, 4, 0, -1]);


// 5 отсортировать по убыванию
let arrayNum = [1, 6, 7, 8, 3, 4, 5, 6];
let arraySort = arrayNum.sort((a, b) => a - b);
console.log(arraySort);


// 6 отфильтровать по значению >3
let arrayZn = arrayNum.filter((num) => num > 3);
console.log(arrayZn);


// 7 функция принимает массив и число и выводит индекс элемента
function numFinder(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return (i);
        }
    }
}
console.log(numFinder([1, 5, 12, 3, 7, 6, 2, 9, 4, 11, 8], 6));


// 8 цикл выводит число пока оно не станет меньше 10
function less10(num){
    while (num >= 10) {
        console.log(num);
        --num;
    }
}
less10(50);


// 9 цикл для простых чисел



// 10 цикл нечетных чисел