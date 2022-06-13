// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


// Parameter    Integer(Number)
// Return       Number in descending order
// Example      Input: 42145 Output: 54421

//              Input: 145263 Output: 654321

//              Input: 123456789 Output: 987654321
// Pseudo       Store the integer value in a variable.
                
//              pass into a string
//              sort the string
//              split the sorted array
//             reverse array of intergers
//             finally join them



// solution
const descendingOrder = (n) => {
  return parseInt(n.toString().sort('').split().reverse().join(''))
    
}