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

//calculate factorial
function factorial(x) {
    let result = 1;
    for (let i = x; i > 0; i--) {
      result *= i;
    }
    return result;
  }
console.log(factorial(4));

//check if an element is in an array
function inArray(array, x) {
    return array.includes(x);
}
console.log(array, x)

//fizzbuzz
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  fizzBuzz();
  
//sum of all numbers in an array
function sumArray(numArray) {
    let sum = 0
    for (i=0; i<numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}
x = [5,4,3]
console.log(sumArray(x));
//or
function sumArray1(numArray1) {
    return numArray1.reduce((acc, num) => acc + num, 0);
}
x2 = [2,3,4,3,2]
console.log(sumArray1(x2));

//remove duplicates from an array
function dupArr1(numArr1) {
    let newArr = [];
    for (i=0;i<numArr1.length;i++) {
        if (!newArr.includes(numArr1[i])) {
            newArr.push(numArr1[i]); 
        }   
    }
    return newArr;
}
numArr1 = [4,4,5,6,4,5,2]
console.log(dupArr1(numArr1));

//get the first two digits of a 4 digit number without Math.floor
year = 2004
    var j = function reverseString(year) {
        strJ = year.toString(); //converts the year to string
        console.log(strJ);
        revreseStrJ = strJ.split('').reverse().join('') //reverses the order of the year
        console.log(revreseStrJ,"hii");
        divisible = revreseStrJ%100; //gets the first two digits of the year (excluding the zero if its in the tens place)
        console.log(divisible,"divisible");
        revrsDivisibleStr = divisible.toString(); //converts it into string
        console.log(revrsDivisibleStr, 'reverse div str');
        revrsDivisible = revrsDivisibleStr.split('').reverse().join(''); //reverses the string back to its original order
        console.log(revrsDivisible,"rev div");
        if (revrsDivisible<10){ //if the year is 2004, its not 02 and simply 2 at this point in the function
            return divisible*10;
        }
        else{
        return revrsDivisible % 100;
        }
    }
console.log(j(2004))