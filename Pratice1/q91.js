//1.Function Declaration
function Add(num1,num2){
    let sum = num1+num2;
    return sum;
}
let res1 = Add(1,1);
console.log(res1);

//2.Function Expression
let add2 = function (num1,num2){
    let sum = num1+num2;
    return sum;
}
let res2 = add2(1,2);
console.log(res2);

//3.Arrow function
var add3 = (num1,num2)=> num1+num2;
let res3 = add3(1,3);
console.log(res3);

//4.Using function constructor
var add4 = new Function('num1','num2','return num1+num2');
let res4 = add4(1,4);
console.log(res4);

//5.Hoisting
greet();
function greet(){
    console.log("Hello world");
}