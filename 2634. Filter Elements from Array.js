var filter = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};

//this is a sample solution for the question
const fn = function (element, index) {
  if (element > 10) {
    return true;
  } else {
    return false;
  }
};

console.log(filter([0, 10, 20, 30], fn));
