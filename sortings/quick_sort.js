// Algoritm 5. quick sort
function quick_sort(arr) {
	//debugger;
  if (arr.length <= 1) return arr;

  var i = 0, len = arr.length,
      s = Math.round(Math.random() * (len - 1));
  const l = [], r = [];
  while(i < len) {
    if (i === s || arr[i] == undefined) {
      i++;
			continue;
    }
    if (arr[i] < arr[s]) l.push(arr[i]);
    else r.push(arr[i]);
		i++;
  }
	l.push(arr[s]);
  return quick_sort(l).concat(quick_sort(r));
}
