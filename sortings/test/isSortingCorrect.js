// Сравнение сортировки с базовым методом
function isSortingCorrect(f) {
  const arr = randomArray(1000, {from: -13436, to: 26566});
  const arr1 = arr.slice(0).sort((a,b) => a - b);
  const arr2 = f(arr.slice(0));

  for(let i = 0; i < arr.length; i++)
    if (arr1[i] !== arr2[i]) return false;
  return true;
}
