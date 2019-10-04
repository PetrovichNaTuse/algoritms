// Возвращает функцию, которая замеряет время выполнения
// функции f, а так же создаёт новый массив для сортировки.
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

// Usage
const newFunc = bench(func); // => вернёт новую функцию
