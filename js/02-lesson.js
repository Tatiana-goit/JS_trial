//#13
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.

// function slugify(title) {
//     let slug = title.toLowerCase();
//     const mas = slug.split(' ');
//     slug = mas.join('-');
//     return slug;
// }
// !!!!ДЕКЛАРАТИВНЫЙ КОД!!!!!!
// function slugify(title) {
//      return title.toLowerCase().split(' ').join('-');
// }
// console.log(slugify('Массивы для НОВИЧКОВ'))


// #16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
// const newArray = firstArray.concat(secondArray);
// return maxLength >= newArray.length ? newArray : newArray.slice(0,maxLength)
// }

// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0))


// #21
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//     const words = string.split(' ');
//     let longestWord = words[0];

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//          }
//     }
//     return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const words = string.split(' ');
//   let longestWord=words[0];
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//      longestWord=word;
//     }
//   }
//     return longestWord;
//   // Пиши код выше этой строки
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));



// #22
// Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//  for (let i=min; i<=max; i +=1) {
//     numbers.push(i);
// }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));


// #23
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//     let newMas = [];

//     for (const number of numbers) { 
//         if (number > value) {
//             newMas.push(number);
//         }
//     }
//     return newMas;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// #26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
//      if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }


// #25
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//     let array3 = [];
//   for (let i = 0; i < array1.length; i +=1)  {
//       if (array2.includes(array1[i])) {
//                 array3.push(array1[i])
//             }
//     }    
// return array3;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


// #28
// Остатки от деления

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;



// #29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

// function getEvenNumbers(start, end) {
//     const massiv = [];
//     for (let i = start; i <= end; i += 1) { 
//         if (i % 2 === 0) { 
//             massiv.push(i);
//         }
//     }
//     return massiv;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));


// #31
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.

// function findNumber(start, end, divisor) {
//     for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return  i;
//     }
//   }
// }

// console.log(findNumber(23, 30,4));



// #32 
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//     for (const element of array) {
//         if (element === value) { 
//             return true;
//         }
//     }
//     return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3))