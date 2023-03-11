/*
var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/


var login = prompt('Ведіть логин:');
var message;

message = login == ('Вася') ? alert('Привіт') : (prompt('Ведіть логин:')(login == 'Директор')) ? alert('Здравствуйте') : (prompt('Ведіть логин:')(login == '')) ? alert('Немає логіна') : alert('Не вірно');

alert(message);