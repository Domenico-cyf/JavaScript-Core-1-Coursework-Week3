// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];




var mulByHundredCaseOne = numbers.map(function mul(num) {
    return num * 100;
    })
    console.log(mulByHundredCaseOne);

var mulByHundredCaseTwo =  numbers.map(function (num) {
    return num * 100;
    })
console.log(mulByHundredCaseTwo);

var mulByHundredCaseThree = numbers.map(number => {
    return number *100});
console.log(mulByHundredCaseThree);


var mulByHundredCaseFour = numbers.map(number => number *100);
console.log(mulByHundredCaseFour);