// Простые примеры с Видео !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1 пример. Callback
// const main = function (x, y, callback) {
//     const result = callback(x, y);
//     console.log(result)
// }
 
// const add = (a, b) => a + b;

// const sub = (a, b) => a - b;

// main(2, 5, add);
// main(2, 5, sub);
// main(2, 5, (a, b) => a * b);
// main(2, 5, (a, b) => a / b);



// 2 пример. Фильтр с callback !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const filter = function (array, test) {
//     const newArray = [];

//     for (const el of array) {
//         if (test(el)) {
//             newArray.push(el);
//          }
//     }
//     return newArray;
// }

// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], value => value >= 5));
// console.log(filter([6, 7, 8, 9, 10, 11, 12], value => value <=10));

// 2 вариант
// const callback = function (value) {
//     return value >= 5;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(filter(array, callback));

// const array2 = [6, 7, 8, 9, 10, 11, 12];
// console.log(filter(array2, function (value) {
//     return value <=10;
// }));


// 3. пример из конспекта!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     if (test(element)) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const callback = function (fruit) {
//     return fruit.isFresh
// }

    
// const freshFruits = filter(fruits, callback);
// console.log(freshFruits); 

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); 


// 4. Стрелочная функция !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const add = a => a*5

// console.log(add(3));



// 5. Замыкание
// const fnA = parameter => {
//   const value = 100;
//   const newFn = function () {
//     console.log(value * parameter);
//   }
//   return newFn;
// }

// const fnB = fnA(5);
// fnB();


