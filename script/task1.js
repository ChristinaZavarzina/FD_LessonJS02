/* Перепишіть if з використанням оператора "?": 
if(a + b < 4) {
  result = 'Мало';
}else {
  result = 'Багато';
}
*/

let little = 'Мало';
let many = 'Багато';

// 1 Мало:

let one = 1, two = 2, three = 0;

three = a + b < 4 ? little : many;

document.write(three);

// 2 Багато:

let four = 1, five = 2, six = 0;

six = a + b < 4 ? little : many;

document.write(six);