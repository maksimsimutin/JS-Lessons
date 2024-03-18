
// отобпражается в носоле

console.log('Hello JavaScript');
console.error('Hello JavaScript');
console.warn('Hello JavaScript');
console.info('Hello JavaScript');

// var устаревший let новій формат 
// змінна

let num = 5;
let some_new = 'Result:'

console.log(some_new + num + '!');

let isJhonHasCar = false;
num = 'word';

console.log(num);

num = 5; // числа
num = '5'; // текс

// const - конствнта не змінюється

const number = 10;
// number = 5;

console.log(number);

// Математичні дії 

let num1 = 15;
let num2 = 7;

console.log('Result: ' + (num1 - num2)); // вичитание
console.log('Result: ' + (num1 + num2)); // сложение
console.log('Result: ' + (num1 * num2)); // умножение
console.log('Result: ' + (num1 / num2)); // деление
console.log('Result: ' + (num1 % num2)); // остаток от деления

let num3 = 5;
let num4 = '10';

console.log(num3 + Number(num4));

// математические сокращения 

num1 += 10; // первій знак делает действие второй уранивает
num1--; // так сокращаем если нужно прибавить или убрать '1'

console.log(num1);

// встроеній класс Math

let pi = Math.PI;
console.log(Math.min(-1, 5, 8, 4)); // помогает вічеслить cos, sin, abs, max, min и т.д

// умовні аператори 
// '==' '!=' '<=' '>=' 
// && - и ; || - или ;

let number1 = 15;
let isHasCar = true;


if (number1 >= 15 || !isHasCar) {
    console.log('Yes');
    console.log('Yes, he has car');
}
else if (number1 > 15) {
    console.log('Num is 15');
}
else if (number1 != 15) {
    console.log('Num is 15');
}
else {
    console.log('Else');
}

// switch проверяем тоолько если одна переменая и только на совпадение

let word =('new2');

switch (word) {
    case 'new':
        console.log('let is new');
        break;
    case 'Some':
        console.log('let is Some');
        break;
    default:
        console.log('let is unknown');
        break;
}

// масиви даних

let data = [5, 3, 14, 5.3, 'word', true]; // new Array(5, 3, 14, ...)
data[0] = 'Some'; // меняем индекс
console.log(data.length);

let matrix = [[5, 4],[10, true],[false, 'world', 4.3]];
matrix[0][0] = 60;
console.log(matrix[2][1]); // віведено 'world'
