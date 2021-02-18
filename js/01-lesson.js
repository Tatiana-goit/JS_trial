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


// 4. Дано произвольное целое число n. Написать программу, которая
// разбивает число n на цифры и выводит их на экран;
// подсчитывает сколько цифр в числе n;
// находит сумму цифр числа n;
// меняет порядок цифр числа n на обратный.
// Пример: ввожу число 123
// цифр в числе = 3
// сумма = 6(это значение получили следующим образом 1+2+3)
// обратный порядок = 321
//     * /
// const n = 123456
// const str = n + '';
// let sum = 0;
// let sumStr = '';

// for (let i = 0; i < str.length; i = i + 1){
//     console.log(str[i]);
//     sum += Number(str[i]);
//     }
// console.log(sum);

// for (let i = str.length - 1; i >= 0; i = i - 1){
//     sumStr += (str[i]);
// }
// console.log(sumStr);

// !!!!!
// const n = 1235.5;
// const str = n + '';
// let sum = 0;
// let sumStr = '';

// for (let i = 0; i < str.length; i = i + 1){
//     if (isNaN(str[i])) { 
//         continue;
//     }
//     sum += Number(str[i]);

//     }
// console.log(sum);

// for (let i = str.length - 1; i >= 0; i = i - 1){
//     sumStr += (str[i]);

// }
// console.log(sumStr);


// console.log(5 > 4);
// console.log(10 >= "7");
// console.log("2" > "12");
// console.log("2" < "12");
// console.log("4" == 4);
// console.log("6" === 6);
// console.log("false" === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log("0" == false);
// console.log("0" === false);
// console.log("Ёнанас" < "ёжик");
// console.log("Ёнанас" === "ёжик");
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && "hello");
// console.log(true && 0 && "hello");
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || 2 && 3 || 4);

