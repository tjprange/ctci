/* Remove duplicates from sorted array */

let arr = [0, 0, 0, 1, 2, 2, 3, 3, 3, 3, 4];

removeDuplicates = (arr) => {
  let arrSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    arrSet.add(arr[i]);
  }
  //console.log(arrSet);
  arr = [];
  for (let item of arrSet) {
    arr.push(item);
  }
  console.log(arr);
  return arr;
};

removeDuplicates(arr);
