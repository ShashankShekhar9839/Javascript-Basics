if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (cb, thisArg) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
      if (cb.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }

    return result;
  };
}

let arr = [1, 2, 3, 4, 5, 5];

let ans = arr.myFilter((item) => item % 2 === 0);
console.log(ans); // [2, 4]
