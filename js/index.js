
// отобпражается в носоле

// console.log('Hello JavaScript');
// console.error('Hello JavaScript');
// console.warn('Hello JavaScript');
// console.info('Hello JavaScript');

// var устаревший let новій формат 
// змінна

// let num = 5;
// let some_new = 'Result:'

// console.log(some_new + num + '!');

// let isJhonHasCar = false;
// num = 'word';

// console.log(num);

// num = 5; // числа
// num = '5'; // текс

// const - конствнта не змінюється

// const number = 10;
// number = 5;

// console.log(number);

// Математичні дії 

// let num1 = 15;
// let num2 = 7;

// console.log('Result: ' + (num1 - num2)); // вичитание
// console.log('Result: ' + (num1 + num2)); // сложение
// console.log('Result: ' + (num1 * num2)); // умножение
// console.log('Result: ' + (num1 / num2)); // деление
// console.log('Result: ' + (num1 % num2)); // остаток от деления

// let num3 = 5;
// let num4 = '10';

// console.log(num3 + Number(num4));

// математические сокращения 

// num1 += 10; // первій знак делает действие второй уранивает
// num1--; // так сокращаем если нужно прибавить или убрать '1'

// console.log(num1);

// встроеній класс Math

// let pi = Math.PI;
// console.log(Math.min(-1, 5, 8, 4)); // помогает вічеслить cos, sin, abs, max, min и т.д

// умовні аператори 
// '==' '!=' '<=' '>=' 
// && - и ; || - или ;

// let number1 = 15;
// let isHasCar = true;


// if (number1 >= 15 || !isHasCar) {
//     console.log('Yes');
//     console.log('Yes, he has car');
// }
// else if (number1 > 15) {
//     console.log('Num is 15');
// }
// else if (number1 != 15) {
//     console.log('Num is 15');
// }
// else {
//     console.log('Else');
// }

// switch проверяем тоолько если одна переменая и только на совпадение

// let word =('new2');

// switch (word) {
//     case 'new':
//         console.log('let is new');
//         break;
//     case 'Some':
//         console.log('let is Some');
//         break;
//     default:
//         console.log('let is unknown');
//         break;
// }

// масиви даних

// let data = [5, 3, 14, 5.3, 'word', true]; // new Array(5, 3, 14, ...)
// data[0] = 'Some'; // меняем индекс
// console.log(data.length);

// let matrix = [[5, 4],[10, true],[false, 'world', 4.3]];
// matrix[0][0] = 60;
// console.log(matrix[2][1]); // віведено 'world'

// цикли
// for

// for (let i = 1; i <= 10; i++ ) {
//     console.log(i);
// }

// while 

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i += 2;
// }

// do...while

// let x = 100;
// do {
//     console.log(x);
//     x /= 2;
// } while (x > 10);

// for (let i = 10; i > 0; i--) {
//     if (i == 2) break;

//     if (i % 2 == 0) continue;
//     console.log(i);
// }

// let nums = [1, 4, 6, 34, 15];

// for (let i = 0; i < nums.length; i++) {
//     nums[i] *= 2;
//     console.log('Elenent is: ' + nums[i]);

// }


//   функціональні вікна

//alert ('Привіт, як в тебе справи?');

// let data = confirm('Чи, все вам подобається?');
//  if (data)
//  alert ('Привіт, як в тебе справи?');
//  else
//  console.log('Error');

// let user = prompt ('Як ваші справи?', 'Все добре');
//   if (user == null)
//   alert ('Ви нічого не ввели!');
//   else 
//   console.log(user);
    
// фунцї

// function print(word) {
//     console.log(word + '!');
// }

// function add(x,y) {
//     if (x != null && y != null) {
//         let res = Number(x) + Number(y);
//         print('Result: ' + res);
//     }
//     else 
//         alert('Error');
// }

// let user1 = prompt('Enter 1 number: ', 0);
// let user2 = prompt('Enter 2 number: ', 0);

// add(user1,user2);

// function arrSum (arr) {
//     let summ = 0;
//     for (let i = 0; i < arr.length; i++) 
//     summ += arr[i];

//     return summ;    
// }

// let arr1 = [0, 2, 5 , 10, ];
// let res1 = arrSum(arr1);

// let arr2 = [9, 9 ,5, 2, 2];
// let res2 = arrSum(arr2);

// if (res1 > res2) 
// console.log(res1);
// else 
// console.log(res2);

function btnClick () {
    console.log('Massenger');
}

let counter = 0;
function btnOnceClick(el) {
    counter++;
    el.innerHTML = 'Count: ' + counter;
    // el.name = 'New value';
    // alert(el.name);
}

function userInput(el) {
    if (el.value == 'font')
        el.style.fontSize = '20px';
    else if (el.value == 'color')
        el.style.color = 'red';
    else if (el.value == 'bg')
        el.style.backgroundColor = '#333';
}
      


