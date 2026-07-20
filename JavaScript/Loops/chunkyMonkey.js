const newArr = []
const chunkArrayInGroups = (arr, num) => {
  for (let i = 0; i < arr.length; i+=num) {
    newArr.push(arr.slice(i, i+num))
  }
  return newArr;
}