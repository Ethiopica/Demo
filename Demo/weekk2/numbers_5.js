/* 
1. Create a variable num and assign it the value 5.67.
2. Use the Math.round() method to round num to the nearest whole number.
3. Use the Math.floor() method to round it down to the nearest whole number.
4. Use the Math.ceil() method to round it up to the nearest whole number.
5. Print the results using console.log() with messages like: "The rounded value is 6." 
*/

let num = 5.67;
let roundedNum = Math.round(num);
console.log(roundedNum);
/* Math.floor */
let roundNum = Math.floor(num);
console.log(roundNum);

/* Math.ceil */
let roundNum1 = Math.ceil(num);
console.log("The rounded value is " + roundNum1);
