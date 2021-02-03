/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {

  for(let i = 0; i < array.length; i++){
    fn(array[i], i, array);
  }
}
// forEach([5,8,9,20,30,55], function fn(){})

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  let copyArr = []; 
  for(let i = 0; i < array.length; i++){
    copyArr[i] = fn(array[i], i, array)
    console.log(copyArr);
  }
  return copyArr;
}
// map([5,8,9,20,30,55], function fn(){})

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  let x = initial || array[0],
        i = initial ? 0 : 1;

  for(; i < array.length; i++){
    x = fn(x, array[i], i, array)
  }
  return x;
}
// reduce([5,8,9,20,30,55], function fn(){})

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
// let obj = { name: 'Сергей', lastName: 'Петров' }
function upperProps(obj) {
  let arr = [];
  for (let key in obj) {
      key = key.toUpperCase();
      arr.push(key);
  }
  console.log(arr)
  return arr;
}
upperProps({ name: 'Сергей', lastName: 'Петров' }); //вернет ['NAME', 'LASTNAME']

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {

  let newArr = [];

  for(let i = 0; i < array.length; i++){
    newArr = array[i]
    console.log(newArr)
    // if(array[i] < from){
    //   console.log('hi')
    // }
  }

}
slice([10, 22, 34, 56, 78, 99], 0, 2)

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
