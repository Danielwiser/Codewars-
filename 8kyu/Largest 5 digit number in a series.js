// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. 
// The number will be passed in as a string of only digits. 
// It should return a five digit integer. The number passed may be as large as 1000 digits.

// P    getting the most consecutive numbers in digits
// R   
// E   (In the following 6 digit number:

//      283910
//      91 is the greatest sequence of 2 consecutive digits.

//      In the following 10 digit number:

//      1234567890
//      67890 is the greatest sequence of 5 consecutive digits.)
// P    return digits if less or equal than 5
//   save first 5 digits
//   loop with i starting as 0
//     get digit from i to i + 4
//     is current digits greater than previous?
//       replace greatest number with current digit
//     else, increment i and keep looking




// solution
function solution(digits){
    let max = '';
    for (let i = 0; i < digits.length - 4; i++) {
      max = Math.max(digits.slice(i, i + 5), max)
    }
    return max
  }