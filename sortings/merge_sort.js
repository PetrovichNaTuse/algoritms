// Algoritm 4. merge sort

/**
 * Функция конкатенирует два массива в один и возвращает его
**/
function concat(l, r) {
  var i = 0,
      j = 0,
      a = [];
  while(a.length !== (l.length + r.length)) {
    if (l[i] == undefined || r[j] == undefined) {
      a.push(l[i++] || r[j++]);
      continue;
    }
    if (l[i] < r[j]) a.push(l[i++]);
    else a.push(r[j++]);
  }
  return a;
}

/**
 * Функция сорртировки разбиваем массив до базового случая
 * массива с одним элементом. Далее последовательно
 * сравнивает элементы массивов и при необходимости ставиит
 * их в соответствии с возрастающей последовательностью.
 */
function merge_sort(arr) {
  var middle = Math.round(arr.length / 2),
        left, right, maxlen;
  // Разделяем массив до базового случая
  if (arr.length > 1) {
    right = merge_sort(arr.slice(0, middle));
    left = merge_sort(arr.slice(middle));
  } else return arr; // возвращаем базовый случай

  // Возвращаемый массив
  const result = concat(left, right);
  return result;
}
