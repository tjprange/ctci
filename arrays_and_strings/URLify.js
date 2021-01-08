// acquire input from command line
let url = process.argv[2];

// Arrow syntax, same functionality as above
// using RegEx
convertURL = (url) => {
  console.log("before:", url);
  // RegEx modifier
  // ALL exesting values between / / are replaced
  // can also use | operator to convert multiple
  // ie / |e/g replaces ' ' and 'e' with '%20'
  url = url.replace(/ /g, "%20");
  return url;
};

// C style
// convertURL = (url) => {
//   let convertedURL = "";
//   for (let i = 0; i < url.length; i++) {
//     if (url[i] === " ") {
//       convertedURL += "%20";
//     } else {
//       convertedURL += url[i];
//     }
//   }
//   return convertedURL;
// };

url = convertURL(url);
console.log(url);
