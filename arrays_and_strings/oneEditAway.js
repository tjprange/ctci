let str1 = process.argv[2];
let str2 = process.argv[3];

// If the string lengths differ by one, this will check that
// the characters in each string exist in the other
// str1 is the shorter string, str2 is longer string
oneInsertionAway = (str1, str2) => {
  let index1 = 0;
  let index2 = 0;
  while (index1 < str1.length && index2 < str2.length) {
    if (str1.charAt(index1) != str2.charAt(index2)) {
      if (index1 != index2) {
        return false;
      }
      index2++;
    }
    index1++;
    index2++;
  }
  return true;
};

// If the characters are the same length, this will check to
// see if more than one character differs within the strings
oneReplaceAway = (str1, str2) => {
  let unmatchingChar = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) != str2.charAt(i)) {
      if (unmatchingChar) {
        return false;
      }
      unmatchingChar = true;
    }
  }
  return true;
};

oneEditAway = (str1, str2) => {
  if (str1.length === str2.length) {
    return oneReplaceAway(str1, str2);
  } else if (str1.length + 1 === str2.length) {
    return oneInsertionAway(str2, str1);
  } else if (str1.length - 1 === str2.length) {
    return oneInsertionAway(str1, str2);
  }
  // string lengths differ by two or more characters
  return false;
};

console.log(oneEditAway(str1, str2));
