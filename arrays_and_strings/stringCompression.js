let str = process.argv[2];

stringCompression = (str) => {
  let charMap = new Map();
  let compressedString = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i + 1]) {
      compressedString += str[i];
      compressedString += count.toString();
      count = 1;
    } else {
      count++;
    }
  }
  return str.length < compressedString.length ? str : compressedString;
};

console.log(stringCompression(str));
