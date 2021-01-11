// Will determine if a string, not counting non-alpha numeric keys is a palindrone
// in it's current order. Solution does not use regex s = s.replace(/[^a-zA-Z0-9]/g,'')

const isPalindrone = (s) => {
  s = s.toLowerCase();
  let alphaNumericString = '';
  // remove non-alphanumeric chars
  for (let i = 0; i < s.length; i++) {
    let asciiCode = s.charCodeAt(i);
    if (
      (asciiCode >= 97 && asciiCode <= 122) ||
      (asciiCode >= 48 && asciiCode <= 57)
    ) {
      alphaNumericString += s[i];
    }
  }
  s = alphaNumericString;
  let [i, j] = [0, s.length - 1];
  while (i < j) {
    if (s[i] != s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
console.log(isPalindrone('abc.,@'));
