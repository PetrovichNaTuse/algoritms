// Сбор функций для удобства тестирования
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

function bench(f) {
  return function test() {
    var perf = Date.now();
    const result = f.apply(this, arguments);
    test.lastTest = ((Date.now() - perf) / 1000).toFixed(3) + ' sec.';
    console.log('Вызов занял: ' + test.lastTest);
    console.log('Результат последнего вызова находится в свойстве lastTest');
    return result;
  }
}

function testSort(arr) {
  try {
    arr.reduce((a, b) => {
      if (a > b) throw false;
      return b;
    });
    return true;
  } catch(e) {
    if (e === false) return false;
    throw e;
  }
}
// Сравнение сортировки с базовым методом
function isSortingCorrect(f) {
  const arr = randomArray(1000, {from: -13436, to: 26566});
  const arr1 = arr.slice(0).sort((a,b) => a - b);
  const arr2 = f(arr.slice(0));

  for(let i = 0; i < arr.length; i++)
    if (arr1[i] !== arr2[i]) return false;
  return true;
}
