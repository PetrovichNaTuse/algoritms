// Algoritm 2. Selection sort

/*
 * Линейным поиском находится минимальное значение и
 * перемещается в крайнее левое положение, после чего
 * элемент считается отсортированным. Далее поиск начинается
 * в последовательности без отсортированных элементов.
 */
function selection_sort(arr) {
  'use strict'
  var len = arr.length;
  var i = 0;
  while(i < len) {
    var min = i, j = i + 1;
    while(j < len) {
      if (arr[j] < arr[min]) min = j;
      j++;
    }
    if (i === min) {
      i++, min++;
      continue;
    }
    // помещаем в крайнее левое положение несортированных
    // элементов минимальное значение диапазона деструкт..
    [arr[i], arr[min]] = [arr[min], arr[i]];
    i++;
  }
  return arr;
}

// Test result
const ss = bench(selection_sort); // обернули для замеров
ss(randomArray(100000, {from: -1346236, to: 2656346}));
