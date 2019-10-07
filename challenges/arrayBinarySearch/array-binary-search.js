function binarySearch(array, target) {
  let array = [];
  let lowLimit = 0;
  let highLimit = array.length - 1;
  let mid = (lowLimit + highLimit)/2;

  for(i = 0; i < array.length, i++;) {
    if(mid === target) {
      return target
    }
    else if (mid < target) {
      mid--; 
    }
    else if (mid > target) {
      mid++;
    }
  };
};