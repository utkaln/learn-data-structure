function reverseString(str) {
  if (str === undefined) {
    return "";
  }
  strArr = str.split("");
  if (strArr.length < 1) {
    return str;
  }
  return strArr.reverse().join("");
}
module.exports = reverseString;
