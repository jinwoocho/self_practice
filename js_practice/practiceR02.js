// Factorialize a Number (B2)

// <Goals and rules>
// Return the factorial of the provided integer.
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120.

// <Given code>
// function factorialize(num) {
//   return num;
// }
// factorialize(5);

// <Testing>
// factorialize(5) should return a number.
// factorialize(5) should return 120.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.
// factorialize(0) should return 1.
//gob = gob ha gi

var gob =1;
function factorialize(num) {
    if( num === 0){
        return 1;
    }
    for(var i = 1; i <= num ; i++){
        gob*=i;
    }
    return gob
}

console.log(factorialize(0));