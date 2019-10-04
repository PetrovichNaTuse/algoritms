// Проверка элементов массива на соответствие сортировке в
// порядке убывания.

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

// Usage
testSort(arr);
