// Write a function to split a string and convert it into an array of words.


// P    Converting a string to array.
// R   
// E    "Robin Singh" ==> ["Robin", "Singh"]
//      "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
    
// P    first understand how to create and string and convert into an array. we use the split() method



// solution
const stringToArray = (s) => { 
    return s.split(' ')
  }