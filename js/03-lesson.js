// // // !!! Тренировки
// const schoolClass = {
//     numberClass: 5,
//     letter: "B",
//     teacher : 'Титова Мария Ивановна',
//     quantity: 3,
//     surname: ['Иванов', 'Петров', 'Сидоров'],
//     name: ['Иван', 'Петр', 'Саша'],

//     changeName(newName) { 
//         this.teacher = newName
//     },

//     newPupil(newSurname, newName) { 
//         this.surname.push(newSurname);
//         this.name.push(newName);
//     }
// }

// console.log(schoolClass);

// schoolClass.changeName('Лагодина Ольга Степановна');
// console.log(schoolClass);

// schoolClass.newPupil('Симоненко', 'Катя');
// console.log(schoolClass);


// Доп задачи на деструктуризацию
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// const user = {
//   name: "John",
//   years: 30
// };
// const { name, years: age, isAdmin = false } = user;
// console.log(name, age, isAdmin);




// const temperatures = [18, 14, 12, 21, 17, 29];
// const min = Math.min(temperatures);
// console.log(min);


// ... - spread, распыление. Позволяет распылить коллекцию элементов в другую коллекцию, сделав копию оригинальной не изменяя ее
// ... - rest, сбор. Позволяет скопировать группу элементов коллекции в новую коллекцию, не изменяя оригинальную.


// const numbers = [3,3,[1, 2, 3],5,6];
// console.log(numbers);



// ----------------------------------------------------------------------------------------

// Задачи 3 модуль
// 1-2. Присвой переменной apartment объект описывающий квартиру со следующими характеристиками
//  Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. :

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Генри',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };

// console.log(apartment);


// 3. 5 Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };

//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);


// 4. Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);



// 6-7. Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на 'Генри Сибола';
// массив тегов в свойстве tags добавив в конец строку 'trusted'.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Ямайка';
// apartment.location.city = 'Кингстон';


// console.log(apartment);


// 8. Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };

// console.log(product);


// 9. Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка 'henry.carter@aptmail.com', а значением свойства password - строка 'jqueryismyjam'.

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//     [emailInputName]: 'henry.carter@aptmail.com',
//     [passwordInputName]: 'jqueryismyjam'

// };

// console.log(credentials);

// 10. Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key])
// }
// console.log(keys);
// console.log(values);


// !!!! ИЛИ

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };

// console.log(Object.keys(apartment));

// console.log(Object.values(apartment));


// 11. Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key])
//     };
// }
// console.log(keys);
// console.log(values);



// 12. Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта

// function countProps(object) {
//   let propCount = 0;
//     for (const key in object) { 
//         if (object.hasOwnProperty(key)) { 
//             propCount += 1;
//         }
//     }

//   return propCount;
// }
// console.log(countProps({ }));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// 14 (из 12). Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

// function countProps(object) {
//   return Object.keys(object).length;
// }



// 13. Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// 2 вариант!

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

//  console.log(values);



// 15. Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);



// 16. Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const salariesOfOne = Object.values(salaries);

//     for (const salary of salariesOfOne) { 
//         totalSalary +=salary
//     }

//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// 17. Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// 18. Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price
//         }
//     }
//       return null;
// }
// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Дроид'));
// console.log(getProductPrice('Двигатель'));


// 19. Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const newMas = [];
//     for (const product of products) { 

//         if (Object.keys(product).includes(propName)) { 
//             newMas.push(product[propName])
//         }
//     }
//     return newMas;
// }

// function getAllPropValues(propName) {
//     const newMas = [];
//     for (const product of products) { 
//         for (const key in product) {
//             if (key === propName) {
//                 newMas.push(product[key])
//             }
//         }
//     }
//     return newMas;
// }


// function getAllPropValues (prop) {
//   const total = [];

//   for (const product of products) {
//     if (product[prop]) {
//       total.push(product[prop]);
//     }
//   }

//   return total;
// };

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));


// 20. Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     for (const product of products) {
//         if (product.name === productName)
//             return product.price * product.quantity
//     }
//     return 0;
// }

// console.log(calculateTotalPrice('Бластер'));
// console.log(calculateTotalPrice('Радар'));



// 21. Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);



// 22. В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;


// 23. Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday: highYesterday, today: highToday, tomorrow:highTomorrow, icon:highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;



// 24. Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];


// // for (const color of colors) {
// //     const { hex, rgb } = color;
// //   hexColors.push(hex);
// //   rgbColors.push(rgb);
// // }

// for (const { hex, rgb } of colors) {

//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// 25.Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//     today: { low:lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },
//     tomorrow: { low:lowTomorrow, high: highTomorrow, icon:tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },
// } = forecast;



// 26. Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow, high: todayHigh },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));

// const neww = {
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 }
// }

// const { today: { low: todayLow, high: todayHigh },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = neww;

// function calculateMeanTemperature() {

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature(neww));


// 27. В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.
// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);


// 28. В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores,...thirdGroupScores ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);



// 29. В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.
// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);



// 30. Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.
// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';

//     return { category, priority, completed, ...data };
// }

// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));
// // { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
// //  { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.



// 31. Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
// function add(...args) { 
//     let sum = 0;
//     for (const arg of args) { 
//         sum += arg;
//     }
//     return sum;
// }

// console.log(add(32, 6, 13, 19, 8) );


// 32. Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// function addOverNum(firstNumber,...args) {
//   let total = 0;

//     for (const arg of args) {
//         if (arg > firstNumber) {
//             total += arg;
//         }
//       }

//   return total;
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));


// 33. Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.
// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.
//     Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив[1, 2], потому что только они есть в массиве первого аргумента.

// function findMatches(firstMassiv, ...args) {
//     const matches = []; // Не изменяй эту строку
//     console.log(firstMassiv);
//     console.log(args);
//     for (const arg of args) {
//         if (firstMassiv.includes(arg)) { 
//             matches.push(arg);
//         }
//     }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));



// 34. Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).
// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку 'Удаляем книгу <имя книги>', где <имя книги> это значение параметра bookName.
// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку 'Обновляем книгу <старое имя> на <новое имя>', где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.
// const bookShelf = {
//     books: ['Последнее королевство', 'Страж снов'],
//     getBooks() {
//         return 'Возвращаем все книги';
//     },
//     addBook(bookName) {
//         return `Добавляем книгу ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Удаляем книгу ${bookName}`
//     },
//     updateBook(oldName, newName) {
//         return `Обновляем книгу ${oldName} на ${newName }`
//     }
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook('Мгла'));
// console.log(bookShelf.removeBook('Красный закат'));
// console.log(bookShelf.updateBook('Пески Дюны', 'Дюна'));


// const bookShelf = {
//   books: ['Последнее королевство'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook('Мгла');
// bookShelf.addBook('Страж снов');
// console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Мгла', 'Страж снов']
// bookShelf.removeBook('Мгла');
// console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Страж снов']

// 35. Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

// const bookShelf = {
//     books: ['Последнее королевство', 'Мгла', 'Страж снов'],

//     updateBook(oldName, newName) {
//         const bookIndex = this.books.indexOf(oldName);
//         this.books.splice(bookIndex, 1, newName);
//         return this.books

//   },
// };

// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));
// console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));


// 36-37. К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.
// 37. Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
// 38. Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],

//     getPotions() {
//         return this.potions
//     },

//     addPotion(potionName) {
//         this.potions.push(potionName);
//     },


// };

// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion('Невидимка');
// console.log(atTheOldToad.getPotions());


// 39. Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//     removePotion(potionName) {
//         const zeleIndex = this.potions.indexOf(potionName);
//         this.potions.splice(zeleIndex, 1);
//         return this.potions


//   },
// };
// console.log(atTheOldToad.removePotion('Дыхание дракона'));



// 40. Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     updatePotionName(oldName, newName) {
//         const zeleIndex = this.potions.indexOf(oldName);
//         this.potions.splice(zeleIndex, 1,newName);
//         return this.potions

//   },
// };

// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'));


// 41. Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion({ name, price }) {
//     for (const potion of this.potions) { 
//        if (potion.name === name) {
//         return `Зелье ${name} уже есть в инвентаре!`;
//       }
//     }
//     this.potions.push({ name, price });
//   },

//   removePotion(potionName) {
//       for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         return this.potions.splice(i, 1);
//       }
//     }
//   },

// updatePotionName(oldName, newName) {
//   const { potions } = this;
//   for (const potion of this.potions) {
//     if (potion.name === oldName) {
//       potion.name = newName;
//       return `Зелье ${oldName} обновлено в инвентаре`;
//     }
//   }
//   return `Зелья ${oldName} нет в инвентаре!`;
// }

// };


// atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
// atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
// atTheOldToad.removePotion('Дыхание дракона');
// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
// atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости');
// console.log(atTheOldToad.getPotions());





// ДОПОЛНИТЕЛЬНЫЕ ЗАДАЧИ
// Поработать с перебором объектов (ключи,их значение)
// уведичить все значения на 5, найти их сумму
// Обджект энтрис. Вытянуть поэлементно - деструктуризировать
// for (const [name, rating] of entries) 

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// for (const author in authors) {
//   console.log(author);
//   console.log(authors[author]);
// }


// console.log(Object.keys(authors));
// let values = Object.values(authors);
// console.log(values);
// let sum = 0;

// for (let i = 0; i < values.length; i +=1) {
//   values[i] += 5;  
//   sum += values[i]
// }

// console.log(values);
// console.log({sum});


// const newMas = Object.entries(authors);
// console.log(newMas);

// for (const [name, rating] of newMas) {
//   console.log(name);
// }
// for (const [name, rating] of newMas) {
//   console.log(rating);
// }




// Массив объектов
// Добавить 3 и 4 свойство, 5 свойство только 1 объекту
// получить только 2 свойство
// найти друга опреленного, нашли или нет
// найти имена всех друзей
// получить всех друзей со свойством false (отдельно и в массив новый)
// 2 массива - один фолс другой тру

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];






// Соединить 2 массива 2 числа (конкад и спред)
// const a = [1, 2, 3];
// const b = 4;
// const c = [5, 6, 7, 8, 9];
// const d = 10;

// const result = a.concat(b,c,d);
// console.log(result);

// const resultNew = [...a, b, ...c, d];
// console.log({resultNew});



// Деструктуризировать пару объектов и массивов. Значение по умолчанию и изменить имя. 
// Глубокая деструктуризация


// Проработать Rest. (найти минимум, максимум)


// Паттерн объект настроек!!!!!!!



//  У нас есть объект, в котором хранятся
// зарплаты нашей команды.
// Напишите код для суммирования всех зарплат
// и сохраните результат в переменной sum.
// Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;

// for (const salary of Object.values(salaries)) {
//   sum += salary;
// }
// console.log(sum);




// !!!!!!Задачи из практики с Ашотом

// 1) Напиши скрипт, который, для объекта user,
// последовательно:

// a. добавляет поле mood со значением 'happy'
// b. заменяет значение hobby на 'skydiving'
// c. заменяет значение premium на false
// d. выводит содержимое объекта user в формате
// ключ:значение
// используя Object.keys() и for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true
// };

// const changeUser = obj => {
//   obj.mood = "happy";
//   obj.hobby = "skydiving";
//   obj.premium = false;

//   for (const key of Object.keys(obj)) {
//     console.log(`${obj[key]}`);
//   }

//   return obj;
// }

// console.log(changeUser(user));



// 4) Создайте объект calculator (калькулятор)
// с тремя методами:

// a. read(a, b)- запрашивает два значения и
// сохраняет их как свойства объекта.
// b. sum() - возвращает сумму сохранённых значений.
// c. mult() - перемножает сохранённые
// значения и возвращает результат.

// const calculator = {
//   value1: 0,
//   value2: 0,
//   read(a, b) {
//     this.value1 = a;
//     this.value2 = b;
//   },
//   sum() {
//     return this.value1 + this.value2;
//   },
//   mult() {
//     return this.value1 * this.value2;
//   }
// };

// calculator.read(3, 4);
// const { value1, value2 } = calculator;
// console.log({ value1, value2 });

// console.log(calculator.sum());
// console.log(calculator.mult());



// const objData = {
//   name: "John",
//   surName: "Stones",
//   age: 25,
//   hobby: "football",
//   merried: false
// };

// function getNewValues(obj) {
//   const { name, surName, age, hobby, merried } = obj;

//   let arr = [];

//   arr.push({ name }, {surName}, {age}, {hobby}, {merried} });

//   console.log(arr);
// }

// getNewValues(objData);

// -----------------------

// const objData = {
//   name: "John",
//   surName: "Stones",
//   age: 25,
//   hobby: "football",
//   merried: false
// };

// function getNewValues(obj) {
//   const { name, surName, age, hobby, merried } = obj;

//   let arr = [];

//   arr.push({ name }, {surName}, {age}, {hobby}, {merried} });

//   console.log(arr);
// }

// getNewValues(objData);

// -----------------------

