// Вспомогательная функция меняющщая два элемента
// массива местами.
function swap(arr, a, b) {
  if (arguments.length !== 2)
    throw 'Необходимо передать 2 аргумента';
  let temp;
  temp = arr[a], arr[a] = arr[b], arr[b] = temp;
}
