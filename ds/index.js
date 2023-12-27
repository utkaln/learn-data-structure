function findCommonElements(source, target) {
  let t_start = performance.now();
  if (source == undefined || target == undefined) {
    //console.log("Empty input sent !");
    //reportTime(t_start);
    return true;
  } else {
    for (let index = 0; index < source.length; index++) {
      if (source[index] === target) {
        //console.log("Found a match !");
      } else {
        //console.log("No match !");
      }
    }
    reportTime(t_start);
    return true;
  }
}

function reportTime(startTime) {
  let finishTime = performance.now();
  console.log(`Call Duration => ${finishTime - startTime}`);
}

module.exports = findCommonElements;
