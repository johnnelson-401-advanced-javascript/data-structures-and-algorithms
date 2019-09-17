function arrayReverse(arr) {
  let reversedArray = [];
  for(let i = arr.length -1; i >= 0; i --) {
    reversedArray[reversedArray.length] = arr[i];
  }
  return reversedArray;
};