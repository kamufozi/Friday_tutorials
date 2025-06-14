// // Hoisting demonstration
// let letVariable = "I'm let";
// console.log(varVariable); // undefined (not an error!)
// console.log(letVariable); // ReferenceError: Cannot access before initialization

// var varVariable = "I'm var";



// // Block scoped 
// if (true) {
//     var varInBlock = "I escape!";
//     let letInBlock = "I'm trapped!";
// console.log(letInBlock); // ReferenceError: letInBlock is not defined

// }
// console.log(varInBlock); // "I escape!"


// // //an exercise for the smart ones

// Classic var problem
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints: 3, 3, 3
}

// Fixed with let
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints: 0, 1, 2
}