// // syntax basics
// function doNothingReturnNothing() {

// }

// const doNothingReturnNothing = function () {

// };

// const doNothingReturnNothing = () => {

// }; doNothingReturnNothing();

// function parameters 1
// const greetUser = (userName) => {
//     console.log('hi there, ' + userName);
// };
// greetUser('Sam');

// function parameters 2
// const greetUser = (msg = 'hi, ', userName) => {
//     console.log(msg + userName);
// };
//  greetUser('Sam'); // This line is commented out because it would throw an error due to the way parameters are defined.

// // function parameters 3

// const logMessage = (msg) => {
//     console.log(msg);
// };

// const greetUser = (func, userName) => {
//     func('hi there, ' + userName);
// };
//  greetUser(logMessage, 'Sam'); // This line is commented out because it's not being used.

// // anonymous callback function
// const greetUser = (func, userName) => {
//     func('hi there, ' + userName);
// };

// greetUser((msg) => console.log(msg), 'Sam');

// return values
// const sum = (a, b) => {
//  a + b;
// };
// const sum = (a, b) => a + b;

 // This line is commented out because it's a duplicate declaration.

// // functions returning functions

const logMessage = (punctuation) => {
    return (msg) => console.log(msg + punctuation);
};

// store the return value of the function in a variable
const logConfused = logMessage('??!?');

// value of the variable confused will be a FUNCTION
console.log(logConfused);
logConfused('what the heck'); // logs 'what the heck??!?'

const logExcited = logMessage('!!!!!');
logExcited('actually this is pretty cool'); // logs 'actually this is pretty cool!!!!!'

logMessage('??!?')('what the heck'); // logs 'what the heck??!?'
logMessage('!!!!!')('this is pretty cool'); // logs 'this is pretty cool!!!!!'
