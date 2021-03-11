/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/



var names = [
  "Rakesh",
  "Antonio",
  "Domenico",
  "Alexandra",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

// var longNameThatStartsWithA = names.find(name => name.startsWith("A") && name.length > 7)
var nameThatStartsWithA = names.filter(name => { 
  return name.startsWith("A");

}); 

var giveLength = names.map(function (name) {
 return name.length;
});

var giveLength1 = names.map(function (name) {
 return name.length;
});

var maxLength = Math.max(...giveLength);

var shortNames = names.filter(name => { return name.length < 6;});

var longestName = names.filter(function (name){
   return name.length === maxLength; 
 
});

var onlyFirstLetter = names.map(function (name){
  return name.substring(0,1);
});
// let countNamesEvenLength = 0;
var evenLength = names.forEach(name => name.length % 2 === 0);
  console.log(evenLength);
  console.log("SECOND METHOD============");

  var countNamesLengthFilter = names.filter(name => name.length % 3 === 0 && name.length % 2 === 0);
  console.log(countNamesLengthFilter.length);


console.log("FROM HERE_________________")
console.log(nameThatStartsWithA);
console.log(shortNames);
console.log(longestName);
console.log(onlyFirstLetter);
console.log(...giveLength);
console.log(giveLength1)
console.log(maxLength);
/* EXPECTED OUTPUT */
// "Alexandra"
