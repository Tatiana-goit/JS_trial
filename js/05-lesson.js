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
