/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain null values
  It is decided that if there is a null value the program should exit
  - Add a check for null values, and if one exists, exit the program
  - Do not edit any of the existing code
*/

var pairsByIndex = [[0, 3], [1, 2], [2, 1], [3, 0]];

// If there is a null value in the array exit the program with the error code
// https://nodejs.org/api/process.html#process_process_exit_code
// process.exit(1);

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

// var pairs = pairsByIndex.map(function (indexes) {
//   if (indexes == null) {
//     return process.exit(1);
//   }
//   var student = students[indexes[0]];
//   var mentor = mentors[indexes[1]];
//   return [student, mentor];
// });


// var filtered = pairsByIndex.filter(element => element === null );
// if (filtered.length > 0) {
//   return process.exit(1);
// } else {
//   console.log("everything is ok");
// };

// var findMethod = pairsByIndex.find(singleValue => singleValue === null);
// if (findMethod === null) {
//   return process.exit(1);
// } else {
// console.log("everything is ok")};

// var usingSome = pairsByIndex.some(element  => element === null);
// if (usingSome === true) {
//   return process.exit(1);
// } else {
//   console.log("everything is ok");
// }



const domFavNum = [2, 10, 5, 3, 7, 8, 13,22];
let anyEven = domFavNum.some(element => element %11 === 0);
console.log(anyEven);









