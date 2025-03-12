// my implementation
// this method does not modify the original array instead return a new array

function slice(array, start = 0, end = array.length) {
  let slicedArray = [];
  for (let i = start; i < end; i++) {
    slicedArray.push(array[i]);
  }

  return slicedArray;
}

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = slice(fruits, 1, 3);
console.log(citrus);

// chatgpt's implementation

if (!Array.prototype.slice) {
  Array.prototype.slice = function (begin, end) {
    var len = this.length;
    var start = begin || 0;
    var upto = end !== undefined ? end : len;

    // handling for negative indices

    start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    upto = end < 0 ? Math.max(len + upto, 0) : Math.min(upto, len);

    var result = [];

    for (var i = start; i < end; i++) {
      result.push(this[i]);
    }

    return result;
  };
}

console.log(fruits.slice(0, -1));
