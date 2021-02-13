//Вывести первых 10 четных чисел

// for (let i = 1; i <= 20; i += 1) { 
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

// 1.	Вывести на экран первых 10 чисел, кратных 7 (которые делятся на 7).
// const first = 10;
// const multiplicity = 7;
// for (let i = multiplicity; i <= multiplicity * first; i += 7) { 
//     console.log(i)
// }

// 2.	Вывести на экран квадраты натуральных чисел от 1 до 50.
// for (let i = 1; i <= 50; i += 1) { 
//     console.log (i*i)
// }

// 3.	Выведите 10 чисел, кратных 4, начиная с 20.
// const first = 20;
// const multiplicity = 4;
// for (let i = first; i <first+ multiplicity * 10; i += 4) { 
//     console.log(i)
// }

// 4.	Выведите на экран числа 10,1   10,2   10,3   …   10,8.
// for (let i = 10.1; i < 10.8; i += 0.1) { 
//     console.log (Math.round(i*100)/100)
// }

// 5.	Найдите значение выражения  10+10.5+11+…99.5+100
// let sum = 0;
// for (let i = 10; i <= 100; i += 0.5) { 
//     sum += i;
// }
// console.log("Сумма чисел: ",sum)

// 6.	Найти сумму цифр трехзначного числа. Переверните трехзначное число. 258 - 852
// let sum = 0;
// const chislo = 289;
// const namber1 = Math.floor(chislo/100);
// const namber2 = Math.floor(chislo/10) % 10;
// const namber3 = chislo % 10;
// const res = namber1 + namber2 + namber3;

// console.log(`Исходное число ${chislo}`);
// console.log(`Перевернутое число ${namber3}${namber2}${namber1}`);
// console.log(`Сумма цифр = ${res}`);


// 7.	Определить, кем является человек: дошкольник (0-6), ученик (6-17), студент (17-23)
// 8.	Вывести на экран кубы натуральных чисел от 1 до 30 и подсчитать их сумму.
// 9.	Найти среднее арифметическое всех целых чисел от 1 до 1000.
// 10.	Дано три числа. Если ни одно из чисел не равно 100, то вычислить их среднее арифметическое. 


// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity*pricePerDroid+deliveryFee;
//   console.log(`Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`);
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);


// function isAdult(age) {
//   const passed = age>=18;
//   return passed;
// }
// console.log(passed);


// let isMatch;
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   isMatch = password === SAVED_PASSWORD ;
//   return isMatch;
// }
// isValidPassword('jqueryismyjam');
// console.log(isMatch)


// let message;
// function checkStorage(available, ordered) {
// if (available<ordered) {
//     message = 'На складе недостаточно товаров!'
// } else {
//     message='Заказ оформлен, с вами свяжется менеджер'
//     }
// return message;
// }
// checkStorage(100, 50);
// console.log(message);
// checkStorage(100, 130);
// console.log(message);
// checkStorage(200, 20);
// console.log(message);


// let message;
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   const totalPrice=pricePerDroid*orderedQuantity;
//   if (totalPrice>customerCredits){
//   message = 'Недостаточно средств на счету!'
//   }else {
//   message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits-totalPrice} кредитов`}
//   console.log(message);
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(500, 10, 5000)
