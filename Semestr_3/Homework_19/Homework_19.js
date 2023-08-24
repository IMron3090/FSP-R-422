// forEach 
var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});

// filter
var arr = [1, -1, 2, -2, 3];

var positiveArr = arr.filter(function(number) {
  return number > 0;
});

alert( positiveArr ); // 1,2,3

// map
var names = ['HTML', 'CSS', 'JavaScript'];

var nameLengths = names.map(function(name) {
  return name.length;
});

// получили массив с длинами
alert( nameLengths ); // 4,3,10

// Reduce
var arr = [1, 2, 3, 4, 5]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

alert( result ); // 15
// Метод reduce используется для вычисления на основе массива какого-либо единого значения, 
// иначе говорят «для свёртки массива».
//  Чуть далее мы разберём пример для вычисления суммы.
// every|some
var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

alert( arr.every(isPositive) ); // false, не все положительные
alert( arr.some(isPositive) ); // true, есть хоть одно положительное

// findlndex
const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}

// Counting Array Elements 
function count(array) {
    const countMap = {};
    array.forEach(element => {
      if (countMap[element]) {
        countMap[element] += 1;
      } else {
        countMap[element] = 1;
      }
    });
    return countMap;
  }
  
  const array = ['james', 'james', 'john'];
  const result = count(array);
  console.log(result);  // { 'james': 2, 'john': 1 }
  