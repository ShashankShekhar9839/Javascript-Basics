// not able to implement by self

let a = [1, 2];
let b = [1, [3, [4, 6]]];

console.log(a.concat(b));

if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth = 1) {
    let result = [];
    for (let item of this) {
      if (Array.isArray(item) && depth > 0) {
        result = result.concat(item.flat(depth - 1));
      } else {
        result.push(item);
      }
    }
    return result;
  };
}

console.log(b.flat(1));
