function findRepeatNumberArray(numArray) {
  let OStr = new Array(["Big O with Array: |=>"]);
  if (numArray === undefined) {
    console.log("O(1)");
    return undefined;
  }

  const arrLen = numArray.length;
  if (arrLen === 0) {
    console.log("O(1)");
    return undefined;
  }
  if (arrLen === 1) {
    console.log("O(1)");
    return numArray[0];
  }
  for (let i = 0; i < numArray.length; i++) {
    OStr.push("n1 ( ");
    for (let j = i + 1; j < numArray.length; j++) {
      OStr.push("n2");
      if (numArray[i] === numArray[j]) {
        OStr.push(")<=|");
        console.log(OStr.join(" "));
        return numArray[i];
      }
    }
    OStr.push(" ) ");
  }
  OStr.push("<=|");
  console.log(OStr.join(" "));
  return undefined;
}

function findRepeatNumberHashMap(numArray) {
  if (numArray === undefined) {
    console.log("O(1)");
    return undefined;
  }
  let OStr = new Array(["Big O with Hashmap: |=>"]);
  const arrLen = numArray.length;
  if (arrLen === 0) {
    console.log("O(1)");
    return undefined;
  }
  if (arrLen === 1) {
    console.log("O(1)");
    return numArray[0];
  }
  let hashedData = {};
  for (let i = 0; i < numArray.length; i++) {
    OStr.push("n1 ( ");
    if (hashedData[numArray[i]]) {
      OStr.push(")<=|");
      console.log(OStr.join(" "));
      return numArray[i];
    } else {
      hashedData[numArray[i]] = numArray[i];
    }
  }
  OStr.push("<=|");
  console.log(OStr.join(" "));
  return undefined;
}

function firstRecurringCharacter(input) {
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[j] === input[j + i] && j + i <= input.length) {
        return input[j];
      }
    }
  }
  return undefined;
}

module.exports = {
  findRepeatNumberArray,
  findRepeatNumberHashMap,
  firstRecurringCharacter,
};
