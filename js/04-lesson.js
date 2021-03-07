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





// 5. 

// !!!из образца
// const bookShelf = {
//     authors: ['Бернард Корнуэлл', 'Роберт Шекли'],    
// };

// const getAuthors = function (bookShelf) {
//     return this.authors;
// };

// // const addAuthor = function (authorName) {
// //     this.authors.push(authorName);
// // };
    
// console.log(getAuthors.call(bookShelf));

// bookShelf.addAuthor('Ли Танит');
// console.log(bookShelf.getAuthors());



// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],

//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//     },
  
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
// };

// console.log(pizzaPalace.order('Аль Копчино'));
// console.log(pizzaPalace.order('Венская'));




// 6. Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
 
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },

// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']




// 7. 

// !!!!из образца
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }
// const mango = { username: 'Манго' };
// const poly = { username: 'Поли' };

// greetGuest.call(mango, 'Добро пожаловать');
// greetGuest.call(poly, 'С приездом');

// Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.
// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).
// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages, с помощью метода map, получился массив сообщений о статусе заказов из массива orders.

// const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger', },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {

//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// // const messages = [];

// // for (let i = 0; i < 3; i += 1) {
// //     messages[i]= composeMessage.call(orders[i],i+1);
// // }

// // for (let i = 0; i < 3; i += 1) {
// //     messages.push(composeMessage.call(orders[i],i+1));
// // }

// const messages = orders.map(function (order, index) {
//     return composeMessage.call(order, index + 1);
// });

// console.log(messages);





// 8. как 7




// 9. Функция composeMessage(customerName) создаёт приветственные сообщения для ресторанов. Дополни код так, чтобы в переменных pizzaPalaceComposer и burgerShackComposer были её копии с привязанным контекстом к соответствующим объектам.


// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');


// console.log(pizzaPalaceMessage);
// console.log(burgerShackMessage);




// 10. 

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer)); // Будет ошибка при вызове функции


// // Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики. Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service. Сбор статистики симулируется логированием строки. Разберись и дополни код так, чтобы он работал верно.

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe);
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe);
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']







// Задача интернет магазин от Репеты











// Задачи из практики Ашота

/* 1. Напишите две функции:
a. letMeSeeYourName(callback) - спрашивает имя пользователя 
через prompt и вызывает 
коллбек ф-цию callback
b. greet(name) - коллбек принимающий имя и логирующий в 
консоль строку "Привет" + name */

// function letMeSeeYourName(callback) {
//   const name = prompt("введите имя");
//   if (name) {
//     return callback(name);
//   }
//   return console.log('Это не имя');
// }

// function greet(name) {
//   console.log(`Привет ${name}`);
// }

// letMeSeeYourName(greet);



// const letMeSeeYourName = callback => callback(prompt("введите имя"));
// letMeSeeYourName(name => console.log(`Привет ${name}`));




/* 2. Напишите две функции:
a. makeProduct(name, price, callback) - принимает имя и 
цену товара, а также колбек. 
Функция создаёт обьект товара, добавляя ему уникальный 
идентификатор в свойство id и
 вызывает колбек передавая ему созданный обьект.
b. showProduct(product) - коллбек принимающий обьект 
продукта и логирующий его в консоль */


// const makeProduct = (name, price, callback) => {
//   const product = {
//     name,
//     price,
//   };

//   product.id = Math.random()*100;
//   return callback(product);
// }

// const showProduct = product => console.log(product);

// makeProduct("молоко", 40, showProduct);


/* 3. Выполните рефакторинг функции makeDishWithShef(shefName, dish) так, 
чтобы не нужно было каждый раз передавать имя шефа. Напишите функцию 
makeShef(shefName), 
которая возвращает другую функцию makeDish(dish), 
помнящую имя шефа при её вызове. */

// const makeShef = (shefName) => {
//   return function makeDish(dish) {
//     console.log(`Шеф ${shefName} готовит ${dish}`);
//   }
// }

//   const name = makeShef('Эдуард');
// name('пирожки');
// name('рыбу');
// name('мясо');

// const nameSecond = makeShef('Дмитрий');
// nameSecond('компот');
// nameSecond ('суфле');

