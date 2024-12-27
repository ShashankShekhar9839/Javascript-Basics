// objects are 'copied by reference'

// Cloning and merging  --- Object.assign

/*  
copying an object variable will create one more reference to the same object 

Object.assign(dest, ...sources)


*/

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

console.log(user.name, user.canEdit, user.canView); // John, true, true

// If the copied property name already exists, it gets overwritten:

Object.assign(user, { name: "Shashank" });
console.log(user.name); // Shashank

// NESTED CLONING

let userTwo = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = structuredClone(userTwo); // deep cloning or structure cloning --- nested objects also clone

/** 

Summary
Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.

All operations via copied references (like adding/removing properties) are performed on the same single object.

To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) or a “deep cloning” function structuredClone or use a custom cloning implementation, such as _.cloneDeep(obj).

*/

// MEMORY MANAGEMENT

/**

The main things to know:

Garbage collection is performed automatically. We cannot force or prevent it.
Objects are retained in memory while they are reachable.
Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole, as we’ve seen in the example above

*/
