// my implementation

// if (!Array.prototype.myMap) {
//   Array.prototype.myMap = function (cb) {
//     let passedArray = this;
//     let result = [];

//     for (let i = 0; i < passedArray.length; i++) {
//       result.push(cb(passedArray[i], i));
//     }

//     return result;
//   };
// }

// let a = [1, 2, 3, 4, 5];
// let cb = (num) => {
//   return num * 2;
// };

// console.log(a.myMap(cb)); // Output: [2, 4, 6, 8, 10]

// chat gpt implementation

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb, thisArg) {
    if (typeof cb !== "function") {
      throw new TypeError(cb + " is not a function");
    }

    let result = [];

    for (let i = 0; i < this.length; i++) {
      if (Object.prototype.hasOwnProperty.call(this, i)) {
        result.push(cb.call(thisArg, this[i], i, this));
      }
    }

    return result;
  };
}

let a = [1, 2, 3, 4, 5];
let cb = (num) => num * 2;

console.log(a.myMap(cb)); // Output: [2, 4, 6, 8, 10]
