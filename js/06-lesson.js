// Тренировка

const numbers = [2, 5, 9, 7, 1, 10];

// console.log(numbers);

// numbers.forEach(number => console.log(number));

// numbers.forEach(number => console.log(number*6));

// const newArray = numbers.map(number => number * 10);
// console.log(newArray);

// const newElement = numbers.filter(number => number > 5);
// console.log(newElement);

// const newElement = numbers.find(number => number > 5);
// console.log(newElement);

// const coint = numbers.reduce((sum, number) => sum + number, 0);
// console.log(coint);

// console.log(numbers.sort((a, b) => a - b));

// const sortNumbers = [...numbers].sort((first, last) => last - first);
// console.log(sortNumbers);
// console.log(numbers);




const mults = [
    { id: '1', name: 'Matroskin', nick: 'Kot', force: 25, online: false },
    { id: '2', name: 'Pechkin', nick: 'Pochtalion', force: 12, online: true  },
    { id: '3', name: 'Fedor', nick: 'Dydy', force: 35, online: false  },
    { id: '4', name: 'Sharic', nick: 'Pes', force: 23, online: true },
]

// console.log(mults);

// console.table(mults);

// mults.forEach(mult => console.log(mult.name));

// const newArray = mults.map(mult => mult.nick);
// console.log(newArray);

// const newArray = mults.map(({name,nick}) =>({name,nick}));
// console.log(newArray);

// const newArray = mults.map(mult => {
//     return {
//         ...mult,
//         force: mult.force * 1.1,
//     }
// });
// console.log(newArray);


// const newForce = '3';
// const newArray = mults.map(mult => {
//     if (newForce === mult.id) {
//         return {
//             ...mult,
//             force: mult.force * 1.1,
//         }
//     }

//     return mult;
// });
// console.log(newArray);

// const newForce = '3';
// const newArray = mults.map(mult =>
//     newForce === mult.id
//         ? {...mult, force: mult.force * 1.1}
//         :  mult
// );
// console.log(newArray);


// const onlineHero = mults.filter(mult => mult.online);
// console.log(onlineHero);

// ????????????
// const onlineHero = mults.filter(({ online }) => online);
// console.log(onlineHero);

// const sechId = '3';
// const newHero = mults.find(({ id }) => id === sechId);
// console.log(newHero);



// const isAllBig = mults.every(mult => mult.force > 20);
// console.log(isAllBig);

// const isAllBig = mults.some(mult => mult.force > 20);
// console.log(isAllBig);

// const check = (mult) => mult.force > 20;
// console.log(mults.some(check));



// const coint = mults.reduce((sum, mult) => sum + mult.force, 0);
// console.log(coint);

// const coint = mults.reduce((sum, mult) => [...sum, ...mult.nick], []);
// console.log(coint);


// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);



// console.log(mults.sort((a, b) => a.force - b.force));

// const sortMults = [...mults].sort((first, last) => last.force - first.force);
// console.log(sortMults);



// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(3));




// !!!!!!!!!!!!!!!!!!ЗАДАЧИ ИЗ АВТОПРОВЕРКИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 1. Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции. 
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
  
//   orderedItems.forEach(item => totalPrice +=item)

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));



// 2. Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
  
//     numbers.forEach(function newArray(number) {
        
//         if(number > value) {
//         filteredNumbers.push(number);
//         }

// })
//     return filteredNumbers;
// }
  
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));




// 3. Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
  
//     firstArray.forEach(function newArray(element) {
//         if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     })     
//     return commonElements;
//   }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


// 4. Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// 5. Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// const calculateTotalPrice = ((quantity, pricePerItem) => quantity * pricePerItem);
// console.log(calculateTotalPrice(8, 60));


// 6. Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => totalPrice += item);

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));


// 7. Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     return filteredNumbers;
// }
  
// console.log(filterArray([12, 24, 8, 41, 76], 38));


// 8. Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     return commonElements;
//   }

//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));


// 9. Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {

//     const newArray = [];
//     numbers.forEach(number => {

//         if (number % 2 === 0) {
//             newArray.push(number + value);
//         } else { newArray.push(number) }
//     })

//     return newArray;
// }

function changeEven(numbers, value) {

    const newArray=numbers.map(number => {

        if (number % 2 === 0) {
            number + value;
        } else { number }
    })

    return newArray;
}

// console.log(changeEven([17, 24, 68, 31, 42], 100));


// 10. Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);


// 11.Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
   
// const titles = books.map(book => book.title);
  
// console.log(titles);

 

// 12. Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
  
// const genres = books.flatMap(book => book.genres);
// console.log(genres);



// 13. Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    }
]

// const getUserNames = users.map(user => user.name)
// console.log(getUserNames);


// const getUserNames = users => {
//     const newArray = users.map(user => user.name)
//     return newArray;
//   };

// console.log(getUserNames(users));



// 14. Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

// const getUserEmails = users.map(user => user.email)
// console.log(getUserEmails);


// const getUserEmails = users => {
//     const newArray = users.map(user => user.email)
//     return newArray;
//   };

// console.log(getUserEmails(users));