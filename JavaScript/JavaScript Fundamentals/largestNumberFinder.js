function largestOfAll(arr) {
  let largest = [];
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    let highest = subArr[0];
    for (let j = 1; j < subArr.length; j++) {
      if (subArr[j] > highest) {
      highest = subArr[j]
      }
    }
    largest.push(highest)
  }
  return largest
}