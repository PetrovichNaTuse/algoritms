// Algoritm 9. Counting sort

/**
 * Устойчивый алгоритм.
 * Создаётся два дополнительных массива. 
 * 1 массив для подасчёта, 2 массив для сортировки.
 **/
function counting_sort(A) {
  const C = [],
        B = A.slice();
  let i = 0, j = 0, t;
  for(; i < A.length; i++)
    !C[A[i]] ? C[A[i]] = 1 : C[A[i]]++;

  while(++j < C.length) {
    t = t || (C[j - 1] || false);
    if (C[j] && t)
      C[j] += t, t = false;
  }

  while(--i >= 0)
    A[--C[B[i]]] = B[i];
  return A;
}
