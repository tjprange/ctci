/*
	Implement an algorithm to determine if a string has all unique characters. What if you cannot
	use additional data structures? 
*/

// Uses boolean array initialized to false. When ascii char encountered, it's cooresponding index is set to true.
// If it is encountered again, the boolean array will indicate true and the function will return false
let isUnique = (str) => {
  if (str.length > 128) {
    return false;
  }

  let hasSeen = new Array(128).fill(false);
  for (s of str) {
    index = s.charCodeAt(0);
    if (hasSeen[index]) {
      return false;
    }
    hasSeen[index] = true;
  }
  return true;
};

// Uses a set
let isUniqueSet = (str) => {
  let charSet = new Set();
  for (s of str) {
    if (charSet.has(s)) {
      return false;
    } else {
      charSet.add(s);
    }
  }
  return true;
};

console.log(isUnique("abcdefghijklmnopqrstuvwxyz"));
console.log(isUniqueSet(""));
