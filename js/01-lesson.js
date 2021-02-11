//  1. сделать переменные
const option = 1526;
let message = '';

// 2. сделать switch 1 2 3
// 3. в каждом кейсе записать в message строку
switch (option) {
  case 1:
    message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
    break;

  case 2:
    message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
    break;

  case 3:
    message = 'Посылка будет отправлена сегодня';
    break;

  default:
    message = 'Вам перезвонит менеджер';
}

// 4. сделать лог message
console.log(message);