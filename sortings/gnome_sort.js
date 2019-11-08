// Пример 7 gnome_sort

/**
 * Сравнивает два соседних элемента.
 * Если левый больше правого, то они меняются местами и
 * сравниваютя предыдущие элементы иначе сравниваются
 * следующие элементы.
 **/

function gnome_sort(arr) {
  var i = 1, j = 2, len = arr.length, temp;
  while(i < len) {
    if (arr[i - 1] > arr[i] && i > 0) {
      temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i--] = temp;
    }
    else { i = j; j++; }
  }
  return arr;
}
