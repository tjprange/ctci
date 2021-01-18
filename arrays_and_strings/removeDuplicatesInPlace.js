/* Remove duplicates from sorted array in place*/

let arr = [0, 0, 0, 1, 2, 2, 3, 3, 3, 3, 4];

removeDuplicates = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(arr.slice(0, i + 1));
  return arr.slice(0, i + 1);
};

removeDuplicates(arr);
