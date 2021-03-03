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





// 1. Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);





// 2. Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// !!!!!!! из образца
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }


// Для автопроверки
// registerGuest('Манго', name => console.log(`Добро пожаловать ${name}.`));

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// function makeMessage(pizzaName, callback) {
//   return  callback(pizzaName) ;
// }

// console.log(makeMessage('Роял гранд', makePizza));
// console.log(makeMessage('Ультрасыр', deliverPizza));


// 2. способ
//   function makeMessage(pizzaName, callback) {
//   return callback(pizzaName) ;
// }

// console.log(makeMessage('Роял гранд', pizza => `Пицца ${pizza} готовится, ожидайте...`));
// console.log(makeMessage('Ультрасыр', pizza => `Доставляем пиццу ${pizza}.`));





// 3. Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку 'Едим пиццу <имя пиццы>'.

// !!!!!! из образца
// const registerGuest = (name, callback) => {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', name => console.log(`Добро пожаловать ${name}.`));
// registerGuest('Поли', name => console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`));


// Для автопроверки
// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });

// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}.`);
// });


// 2 способ
// const makePizza = (pizzaName, callback) => {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', pizzaName => console.log(`Доставляем пиццу ${pizzaName}.`));
// makePizza('Ультрасыр', pizzaName => console.log(`Едим пиццу ${pizzaName}.`));





// 4. ниже

// !!!из образца
// function processCall(recipient) {
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//   }
// }

// processCall('Манго');



// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);




// function processCall(recipient, onAvailable, onNotAvailable) {
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//   onAvailable(recipient);
// }

// processCall('Манго',name => console.log(`Соединяем с ${name}, ожидайте...`),name => console.log(`Абонент ${name} недоступен, оставьте сообщение.`));
// processCall('Поли', name => console.log(`Соединяем с ${name}, ожидайте...`),name => console.log(`Абонент ${name} недоступен, записываем голограмму.`));



// 4. Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.
// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов.Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       console.log(onSuccess(pizzaName));
//     } else { 
//       console.log(onError(pizzaName));
//     }  
//   },
// };



// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } 
//     return onError(pizzaName);
//   },
// };

// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// function onOrderError(error) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${error}.`;
// }

// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError) );



