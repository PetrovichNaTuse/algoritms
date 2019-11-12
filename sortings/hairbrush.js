// Algoritm  hairbrush_sort

/**
 * Сортировка расческой.
 * Улучшенная версия пузырьковой сортировки.
 * Сравнивает элементы на некотором расстоянии, постепенно
 * уменьшая его и заканчивается обычной пузырьковой сортировкой.
 **/
function hairbrush_sort(A) {
  let factor = 1.247, i, j = 0, dist = A.length, t;
  while((dist = Math.floor(dist / factor)) > 0) {
    for(i = dist; i < A.length; i++)
      if (A[i] < A[i - dist])
        t = A[i], A[i] = A[i - dist], A[i - dist] = t;
  }
  return bubbled_sort(A);
}
