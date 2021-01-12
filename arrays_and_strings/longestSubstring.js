let stringVal = process.argv[2];
console.log(stringVal);

const longestSubstring = (s) => {
  let charSet = new Set();
  let slow = 0;
  let fast = 0;
  let longestSubstring = 0;
  let length = s.length;

  while (fast < length) {
    //move fast ptr
    if (!charSet.has(s.charAt(fast))) {
      charSet.add(s.charAt(fast));
      longestSubstring = Math.max(longestSubstring, charSet.size);
      fast++;
    } // move slow ptr
    else {
      charSet.delete(s.charAt(slow));
      slow++;
    }
  }
  return longestSubstring;
};

console.log(longestSubstring(stringVal));
