// Algoritm 1. Bubbled sort

/*
 * Сортировка идёт справа налево и сравнивает число с 
 * предыдущим и меняет их местами в последовательности
 * возрастания (от меньшего к большему).
 */
function bubbled_sort(arr) {
  'use strict'
  var t, len = arr.length, isSorted;
  for(let i = 0; i < len - 1; i++) {
    isSorted = true;
    for(let j = len - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) // если правое число < левого
        t = arr[j], arr[j] = arr[j - 1], arr[j - 1] = t, isSorted = false;

        // поменять местами (деструктуризация)
        // [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
    if (isSorted) return arr;
  }
  // Вернуть отсортированный массив
  return arr;
}
