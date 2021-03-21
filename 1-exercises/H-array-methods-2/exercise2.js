/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

// const capitalise = str => str.split('').toUppercase.to {
// let array = str.split('').[0].toUpperCase();
// array[0] = capitalised;
// newArr = array.join('');

// return newArr;

// };

function capitalise(str) {
let array = str.split('')[0].toUpperCase()+ str.slice(1);
return array;
//console.log(array);
//newArr = array.join('');

//return newArr;

};

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
