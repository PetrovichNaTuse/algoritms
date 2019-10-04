// Algoritm 3. insertion sort

/**
 * Сравнивает следующее несортированное число справа с уже
 * отсортированными слева. После каждого прохода количество
 * отсортированных чисел слева увеличивается на 1. Число
 * ситается отсортированным если предыдущее сортированное
 * число меньше текущего (сравниваемого).
 **/
function insertion_sort(arr) {
  // Вспомогательная переменная для перестановок
  var notSortedNumber, nextSortedNumber;
  // Цикл по не отсортированным элементам справа
  for(var i = 1; i < arr.length; i++) {
    // Цикл по отсортированным элементам слева
    for(var j = i; j > 0; j--) {
      // Текущий сравниваемый элемент
      notSortedNumber = arr[j];
      // Следующий отсортированны элемент
      nextSortedNumber = arr[j - 1];
      // Если не отсортированный элемент < отсортированного
      if (notSortedNumber < nextSortedNumber) {
        // то поменять их местами и сравнить со следующим
        arr[j] = nextSortedNumber,
        arr[j - 1] = notSortedNumber;
      }
    }
  }
  return arr;
}

const is = bench(insertion_sort); // обёртка для замеров
is(randomArray(100000, {from: -1346236, to: 2656346}));
