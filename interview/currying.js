// What is currying

// It is a functional programming technique, where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. Instead of calling a function with all arguments at once, you call a series of functions, each taking one argument, until all arguments are supplied.

function add(a, b, c = 0) {
  return a + b + c;
}

console.log(add(1, 2, 5));

// with currying

function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3));

// infinite currying

function infiniteCurry(sum = 0) {
  return function (num) {
    if (num === undefined) return sum;
    sum += num;
    return infiniteCurry(sum);
  };
}

console.log(infiniteCurry(1)(2)(3)(4)());

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum.toString());
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
