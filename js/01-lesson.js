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


// 7.	Определить, кем является человек: дошкольник (0-6), ученик (6-17), студент (17-23) и т.д.
let number; 
while (number !== NaN) {
    prompt('Введите число');
    if (number > 0 && number <= 6) {
        alert('дошкольник');
    } else if (number > 6 && number <= 17) {
        alert('школьник');
    } else if (number > 17 && number <= 23) {
        alert('студент');
    } else if (number > 23 && number <= 65) {
        alert('работник');
    } else if (number > 65 && number <= 120) {
        alert('пенсионер');
    } else { alert('а столько живут?'); }
}

// 8.	Вывести на экран кубы натуральных чисел от 1 до 30 и подсчитать их сумму.
// 9.	Найти среднее арифметическое всех целых чисел от 1 до 1000.
// 10.	 Дано три числа. Если ни одно из чисел не равно 100, то вычислить их среднее арифметическое. 
// 11.	 Одна тетрадь стоит 12 грн. Вывести сколько стоит 2, 3, …, 10 тетрадей.
// 12.	 В компьютер поступают результаты соревнований по плаванию для трех спортсменов. Выбрать и вывести лучший результат.
// 13.	 Вычислите n! (6!=1*2*3*4*5*6) (n вводится с клавиатуры)
// 14.	 Подсчитать произведение всех целых чисел от 3 до 13 и от 23 до 33.
// 15.	Составить программу для вычисления суммы целых чисел в интервале от 1 до 200, которые кратны (делятся) числам 4 и 5.
// 16.	 Составить программу для вычисления суммы  квадратов нечётных чисел в интервале от 0 до 300.  
// 17.	 Требуется получить таблицу умножения каждого натурального числа от 1 до 9 на 2, 3, 4, …, 9 (таблица Пифагора)
// 18.	Является ли трехзначное число полиндромом (121, 474 – полиндромы) 
// 19.	 Является ли четырехзначное число полиндромом (1221, 4774 – полиндромы)
// 20.	Определите количество цифр в числе (а) не больше четырехзначного б) произвольного), равных 3.
// 21.	 Составьте программу для подсчета суммы:  .
// 22.	В 1626 году индейцы продали остров Манхеттен за 20 долларов. Если бы эти деньги  положили  в банк под  3% годовых от суммы  вклада в предыдущем году,  то  сколько денег на вкладе было бы в текущем году?                                                      
// 23.	Составить программу для вывода символов текста в обратном порядке.
// 24.	Подсчитать количество слов в произвольном, введенном с клавиатуры, предложении.
// 25.	Является ли заданное слово полиндромом (перевертышем – шалаш, например).
// 26.	Удалить в тексте заданный (заданные) символы.
// 27.	Закодировать слово, поставив в соответствие букве её номер в алфавите.
// 28.	Определить, сколько в тексте заданных слов, например, "что".
// 29.	Заменить удвоенные буквы на одиночные, пробелы - на знак подчёркивания,
// сочетания '**' на многоточие '...'.
// 30.	Определить самое короткое и самое длинное слово.



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



