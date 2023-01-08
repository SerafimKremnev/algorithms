//start array

const sortArray = (n) => {
  const arr = []
  for (let i = 1; i<=n; i++) arr.push(i)
  return arr
}



// algorithms

// Binary Search
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let steps = []

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      steps.push(arr[mid])
      console.log(steps)
      return val;
    }

    if (val < arr[mid]) {
      end = mid - 1;
      steps.push(arr[mid])
    } else {
      start = mid + 1;
      steps.push(arr[mid])
    }
  }
  return -1;Ы
}
console.log(binarySearch(sortArray(1000000), 63681))