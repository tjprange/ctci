const isPalindrone = (s) => {
  let charMap = new Map(); // wil hold character and frequency
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    let asciiCode = s.charCodeAt(i);
    if (
      // test for valid ascii chars
      (asciiCode >= 97 && asciiCode <= 122) ||
      (asciiCode >= 48 && asciiCode <= 57)
    ) {
      if (charMap.has(s[i])) {
        // increment count if it is in map
        let count = charMap.get(s[i]);
        charMap.set(s[i], count + 1);
      } else {
        // add char to map
        charMap.set(s[i], 1);
      }
    }
  }
  // string of length 1 or empty is palindrone
  if (s.length === 1 || s === '') {
    return true;
  }

  let numOdds = 0;
  // even length string must have all even count of unique chars
  // odd length string must have all even count chars and one single char
  for (const [key, value] of charMap.entries()) {
    if (!(value % 2 === 0)) {
      numOdds++;
    }
  }

  if (numOdds > 1) {
    return false;
  }
  return true;
};

console.log(isPalindrone('taco cat'));
