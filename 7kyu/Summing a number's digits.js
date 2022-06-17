// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.



// Parameter    number
// Return       absolute Val
// Example      10 --> 1
//                99 --> 18
//                -32 --> 5
// Pseudo       convert to string, split to array, reduce
            

// solution

const sumDigits = (number) => {
    return Math.abs(number).toString().split('').reduce((a, b) => a + Number(b), 0);
}

