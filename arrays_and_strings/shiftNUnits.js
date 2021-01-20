/* This function will shift all elements in an array N units to the left */

let arr = [1, 2, 3, 4, 5];

// arr is the array, n is the number of units to shift the elements
const shiftNUnits = (arr, n) => {
  let length = arr.length;
  let shiftedArr = [];
  for (let i = 0; i < arr.length; i++) {
    index = i - n;
    if (index < 0) {
      index = index + length;
    }
    shiftedArr[index] = arr[i];
  }
  console.log(shiftedArr);
};

for (let i = 1; i <= 11; i++) {
  shiftNUnits(arr, i);
}
