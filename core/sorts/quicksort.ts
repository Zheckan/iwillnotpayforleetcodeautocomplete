const array: number[] = [5, 3, 8, 4, 2, 7, 1, 6, 9, 0, 10];

function quickSort(array: number[]): number[] {
  if (array.length <= 1) return array;

  const pivot = array[Math.floor(array.length / 2)];
  const left = array.filter((item: number) => item < pivot);
  const right = array.filter((item: number) => item > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(array);
console.log(quickSort(array));