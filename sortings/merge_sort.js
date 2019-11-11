// Algoritm 4. merge sort

/**
 * Возвращает функцию в переменную, чтобы оставить
 * вспомогательную функцию в замыкании
 **/

const merge_sort = (function() {

  /**
   * Функция конкатенирует два массива в один и возвращает его
  **/
  function merge(arr, l, m, r) {
    const buf = new Array(r - l + 1);
    var i = 0, h = l, j = m, k;
    while((h <= m - 1) && j <= r) {
      if (arr[h] <= arr[j]) buf[i] = arr[h++];
      else buf[i] = arr[j++];
      i++;
    }
    // Добавление оставшихся элементов с левой части
    while(h < m) buf[i++] = arr[h++];
    // или справой
    while(j <= r) buf[i++] = arr[j++];

    for(i = 0; l <= r; l++, i++) {
      arr[l] = buf[i];
    }
    return arr;
  }

  /**
   * Функция сорртировки разбиваем массив до базового случая
   * массива с одним элементом. Далее последовательно
   * сравнивает элементы массивов и при необходимости ставить
   * их в соответствии с возрастающей последовательностью.
   */
  function merge_sort(arr) {
    function mergeSort(arr, start, end) {
      var middle,
          diff = end - start;
      if (diff !== 0) {
        middle = Math.ceil(diff / 2) + start;
        mergeSort(arr, start, middle - 1);
        mergeSort(arr, middle, end);
      } else return;
      merge(arr, start, middle, end);
    }
    mergeSort(arr, 0, arr.length - 1);
    return arr;
  }
  return merge_sort;
}());
