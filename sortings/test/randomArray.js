'use strict'

// Пример 0. Вспомогательная функция для создания массива

/*
 * Функция принимает два необязательных аргумента:
 * size - количество элементов в массиве;
 * range - объект содержащий значения:
 *  from - минимальное значение в массиве,
 *  to - максимальное значение в массиве.
 * Возвращает массив длинны size (1000 если не указано)
 * с элементами диапазона range (или от 0 до 1000 если не указано)
 * заполненный рандомными элементами.
 */

function randomArray(size, range) {
  if (range && range.from > range.to)
    throw 'Условие from <= to не выполняется';
  var size = size || 1000,
      min = range.from || 0,
      max = range.to || ((range.to === 0) ? 0 : 1000),
      result = [];
  for(let i = 0; i < size; i++) {
    var numb = Math.round((Math.random() * (max - min)) + min);
    if (numb === 0) numb = Math.abs(numb); 
    result.push(numb);
  }
  return result;
}

// Usage
randomArray(100000, {from: -1346236, to: 2656346});
