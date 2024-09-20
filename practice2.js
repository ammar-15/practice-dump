//sum of 2 numbers
function sum(x,y){
    return x+y;
}
console.log(sum(2,3));

//check odd or even
function oddOrEven(x) {
    if (x%2===0){
        return "the number is even";
    }
    else {
        return "the number is odd"
    }
}
console.log(oddOrEven(4));

//farenheit converter
function celsiusToFarenheit(x) {
    return (9/5)*x+32;
}
console.log(celsiusToFarenheit(30));

//find the largest of the three numbers
function largest(x,y,z) {
    if (x>y && x>z) {
        return x+" is the largest";
    }
    else if (y>x && y>z) {
        return y+" is the largest";
    }
    else {
        return z+" is the largest";
    }
}
console.log(largest(2,3,4));
//or
function largestNum(x,y,z) {
    return Math.max(x,y,z);
}
console.log(largestNum(4,5,6));

//count down from a number to 0
function countDown(x) {
    while (x>=0) {
        console.log(x);
        x--;
    }
}
countDown(5);

//reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello my name is ammar"));

//check if a string is palindrome
function palindromeCheck(str) {
    const reverse = str.split('').reverse().join('');
    if (str===reverse) {
        return "the string is a palindrome";
    }
    else {
        return "the string is not a palindrome";
    }
}
console.log(palindromeCheck("ammar"));