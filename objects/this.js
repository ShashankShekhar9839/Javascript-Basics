"use strict";

let user = {
  name: "shashank",
  age: 23,
  sayHi() {
    console.log("hi");
  },
};

console.log(user.sayHi());

// "this" in methods

/** 
It’s common that an object method needs to access the information stored in the object to do its job

*/

let userTwo = {
  name: "shashank",
  age: 23,
  sayHi() {
    console.log("Hii", this.name); // clg('hi', usertwo.name) also works but if someone will change the object's refrence then it will break, its not reliable
  },
};

console.log(userTwo.sayHi());

// this is not bound, it's value is calculated during the runtime of the code

function sayHi() {
  console.log(this); //in strict mode this -> undefined, else it will be -> window object
}

sayHi();

let some = {
  name: "shashank",
};

let sayNothing = () => {
  console.log(this.name, "nothing");
};
some.f = sayNothing;
console.log(some.f());

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let userThree = makeUser();

// console.log(userThree.ref.name);

/** 
Invocation Type	Value of this
Global context (non-strict mode)  ->	window (or global in Node.js)
Global context (strict mode) ->	undefined
Method of an object	 -> The object itself
Standalone function -> 	undefined (strict mode) or window/global
Constructor function	The new object being constructed
call/apply/bind	The explicitly passed object
Arrow function	Inherits this from the enclosing lexical scope
Event listener	The DOM element that received the event


*/

// #challenge three --- not done by me

// this is method chaning

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
