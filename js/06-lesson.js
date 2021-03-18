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



