// Algoritm 5. quick sort
function quick_sort(arr) {
	//debugger;
  if (arr.length <= 1) return arr;

  var i = 0, len = arr.length,
      s = Math.round(Math.random() * (len - 1));
  const l = [], r = [], m = arr[s];
  while(i < len) {
    if (i === s) {
      i++;
      continue;
    }
    if (arr[i] < m) l[l.length] = arr[i++];
    else r[r.length] = arr[i++];
  }
  return quick_sort(l).concat(m, quick_sort(r));
}
