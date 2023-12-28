age = 10;
console.log("error will show let", age);
//let is a block scoped variable, it means the value of 'age' here can not be accessed outside this block.
// ReferenceError: Cannot access 'age' before initialization
// there will create a TEMPORAL DEAD ZONE in GLOBAL EXICUTION CONTEXT !!!!!!!!!!!!!!!!!!1
let age = 20