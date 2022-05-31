// Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions 
// (which do not take any parameters): func1 and func2

// When bool is truth-ish, func1 should be called, otherwise call the func2.

// P   objects
// R   
// E  _if(true, function(){console.log("True")}, function(){console.log("false")})
//       Logs 'True' to the console.
// P   create an object 


//solution
const _if = (bool, func1, func2) => {
    if( bool == !true || bool == NaN || bool == "" || bool == null || bool == 0 || bool == undefined ){
        console.log('false');
        func2()
    }else if( bool == true || bool == "false"){
        console.log('true')
        func1()
    }else{
        console.log('false')
        func2()
    }
} 


// truthy statement
function _if(bool, func1, func2) {
    return bool ? func1() : func2();
  }