const oddValues = (arr) => {
  let newArr = [];

  // check for an empty array and return
  if(arr.length === 0) {
    return newArr;
  }

  // push array element to newArr if odd
  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // add the recursive call on remaining array items
  newArr = newArr.concat(oddValues(arr.slice(1)));

  // return the newArr of odd elements
  return newArr;
}

console.log(oddValues([1, 1, 4, 3, 8, 7, 2, 13, 17, 19]));