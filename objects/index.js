/*  
JS Objects are non primitive data-types(store multiple values)
*/

let user = new Object(); // object constructor syntax
let newUser = {}; // object literal

user.name = "shashank";
delete user.name;
console.log(user);

// we can use multiword property names

let userTwo = {
  name: "shashank",
  age: 30,
  "like birds": true, /// multiword property name must be quoted
};

// userTwo.like birds  --- this does not work, it will give a syntax error
userTwo["like birds"];

// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:

let key = "likes birds"; // this variable may be calculated at run time which gives a great flexibility

// same as user["likes birds"] = true;
userTwo[key] = true;

// the dot notation can't be used in similar way

let keyTwo = "name";
console.log(userTwo.keyTwo); // undefined

// ---

let fruit = "banana";

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag);

// property value short hand

function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}

// Reading a non-existing property just returns undefined. So we can easily test whether the property exists.

// --- in operator, it is used to check if a property exist in an object or not

console.log("banana" in bag); // true

// special case of in operator

let obj = {
  test: undefined,
};

console.log(obj.test); // it's undefined, so - no such property?

console.log("test" in obj); // true, the property does exist!

/* --- 

Summary
Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.

*/
