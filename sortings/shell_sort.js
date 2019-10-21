// Algoritm 6. shell_sort

// Может пригодиться, чтобы не писать код


function shell_sort(arr) {
  let len = arr.length;
  let n = len;

  // Определяем расстояние на котором будут сортироваться элементы
  while((n = Math.floor(n / 2)) >= 1) {
    // Количество "пачек" чисел
    let countIter = Math.round(len / (Math.round(len / n)));
    // Цикл по "пачкам" элементов
    for(let i = 0; i < countIter; i++) {
      for(let j = n + i; j < arr.length; j += n) {
        let k = j - n,
          self = arr[j];
        while(k >= 0 && self < arr[k])
          arr[k + n] = arr[k], k -= n;
        arr[k + n] = self;
      }
    }
  }

  return arr;
}
