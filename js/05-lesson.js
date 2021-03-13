// объект в свойстве prototype функции-конструктора будет прототипом создаваемого объекта.

// function User() {}
// console.log(User.prototype); // { constructor: User }
// const mango = new User();
// console.log(User.prototype.isPrototypeOf(mango)); // true



// !!!!!! образцы из конспекта

// const Manager = function (name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mango = new Manager('Mango', 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12




// !!!!! Задачи с видео Репеты

// const Head = function ({ ears, nose, mouth } = {}) {
//     this.ears = ears;
//     this.nose = nose;
//     this.mouth = mouth;
// }

// Head.prototype.changeEars = function (newColor) {
//         this.ears = newColor
//     }

// const firstHead = new Head({
//     ears: 'blue',
//     nose: 'strong',
//     mouth: 'small',
// })

// console.log(firstHead);

// firstHead.changeEars('black');

// console.log(firstHead);

// const secondHead = new Head({
//     ears: 'green',
//     nose: 'strong',
//     mouth: 'medium',
// })

// console.log(secondHead);


// Head.message = 'Статическое свойство';
// Head.newNewNewNew = function () { };

// console.dir(Head);








// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 1. Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };

// const child = Object.create(parent);

// child.name = 'Jason';
// child.age = 27;

// console.log(child);
// console.log(parent.hasOwnProperty('surname'));
// console.log(child.hasOwnProperty('surname'));
// console.log(child.hasOwnProperty('name'));


// 2. Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };

// const  parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(ancestor);
// console.log(parent);
// console.log(child);
// console.log(ancestor.isPrototypeOf(child))


// 3. 
// function User(name, email, age) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User('Манго', 'mango@mail.com');
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User('Поли', 'poly@mail.com');
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

//3. Объяви функцию-конструктор Car которая принимает три параметра:
// 4. Выполни рефакторинг функции-конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) функции.
// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.


// function Car ({brand, model, price}={}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// const car1 = new Car({
//     brand: 'Mazda',
//     model: 'CX-5',
//     price: 5
// });

// console.log({ car1 });


// function Car(obj) {
//     const { brand, model, price } = obj;
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// const car1 = new Car({
//     brand: 'Mazda',
//     model: 'CX-5',
//     price: 5
// });

// console.log({ car1 });




// 5.
// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// User.prototype.getEmail = function () {
//   return this.email;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// console.log(mango.getEmail()); // mango@mail.com
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com


// Добавь в свойство prototype функции - конструктора Car два метода:
// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//     return this.price;
// }
 
// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice
// }

// const car1 = new Car({
//     brand: 'Mazda',
//     model: 'CX-5',
//     price: 5
// });

// console.log({ car1 });
// console.log(car1.getPrice());
// car1.changePrice(100)
// console.log(car1.getPrice());



// 6. С помощью Function Declaration напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров. Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.
// Добавь методы на прототип:
// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// function Storage(items) {
//     this.items = items;
// }

// Storage.prototype.getItems = function () {
//     return this.items
// }

// Storage.prototype.addItem = function (newItem) {
//     this.items.push(newItem);
// }

// Storage.prototype.removeItem = function (item) {
//     const index = this.items.indexOf(item);

//     if (index > -1) {
//         this.items.splice(index, 1)
//     }
// }



// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]




// 7. С помощью Function Declaration напиши функцию-конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value.
// Добавь методы на прототип:
// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.

function StringBuilder(baseValue) {
    this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
    return this.value;
};

StringBuilder.prototype.padEnd = function (str) {
    this.value = this.value.concat(str);
};

StringBuilder.prototype.padStart = function (str) {
    this.value =  str + this.value;
};

StringBuilder.prototype.padBoth= function (str) {
    this.value =  str + this.value + str;
};


const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='


