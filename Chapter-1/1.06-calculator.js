// in this exercise we're going to create a calculator
// this is a classical problem in that we're able to use a switch statement and make the correct operations. i was surprised with the books's approach
// first we declare a enum since we know we only have 4 types of operations, it makes sense to put them in a enumeration
var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Subtract"] = "subtract";
    Operator["Multiply"] = "multiply";
    Operator["Divide"] = "divide";
    Operator["Modulo"] = "modulo";
})(Operator || (Operator = {}));
// declare an array that contains tuples - the tuples will contain the Operator which is going to be a enum value, and it's counterpart Operation function
var operations = [];
// declaring a function for each operation then pushing into the previous array the respected tuples
var add = function (x, y) { return x + y; };
operations.push([Operator.Add, add]);
var subtract = function (x, y) { return x - y; };
operations.push([Operator.Subtract, subtract]);
var multiply = function (x, y) { return x * y; };
operations.push([Operator.Multiply, multiply]);
var divide = function (x, y) { return x / y; };
operations.push([Operator.Divide, divide]);
var modulo = function (x, y) { return x % y; };
operations.push([Operator.Modulo, modulo]);
// finally we're going to build the main function where we're able to do the appropriate operation
function calculator(x, y, Op) {
    // search in the array for the approprite function depending on the Operation 
    var tuple = operations.find(function (tuple) { return tuple[0] === Op; });
    // checking if the find returned something. we can force typescript to always think it will return something by inserting an exclamation mark after tuple in 'const operation = tuple[1]' so it becomes like this 'const operation = tuple![1]' then we're able to remove the if(tuple) statement
    if (tuple) {
        var operation = tuple[1];
        var result = operation(x, y);
        return result;
    }
}
// testing calls 
console.log(calculator(5, 15, Operator.Add));
console.log(calculator(18, -2, Operator.Subtract));
console.log(calculator(4, 5, Operator.Multiply));
console.log(calculator(360, 18, Operator.Divide));
console.log(calculator(100, 80, Operator.Modulo));
