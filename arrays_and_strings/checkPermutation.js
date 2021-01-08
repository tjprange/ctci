let str1 = process.argv[2];
let str2 = process.argv[3];

// helper function to sort
function charArr(str) {
  return str.split("");
}

// checks for equality
// The every() method tests whether all elements in the array pass the
// test implemented by the provided function. It returns a Boolean value.
const equals = (str1, str2) => str1.every((ch, i) => ch === str2[i]);

// this function will check if a string is a permutation
function checkPerm(str1, str2) {
  //false if different length
  if (str1.length !== str2.length) {
    return false;
  }
  // convert to char array
  str1 = charArr(str1);
  str2 = charArr(str2);

  // sort
  str1 = str1.sort();
  str2 = str2.sort();
  return equals(str1, str2);
}

console.log(checkPerm(str1, str2));
