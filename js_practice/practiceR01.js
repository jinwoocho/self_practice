// Reverse a String (B1)

// <Goals and rules>
// Reverse the provided string. Your result must be a string.

// <Given code>
// function reverseString(str) {
//   return str;
// }
// reverseString(“hello”);

// <Testing>
// reverseString(“hello”) should return a string.
// reverseString(“hello”) should become”olleh”.
// reverseString(“Howdy”) should become”ydwoH”.
// reverseString(“Greetings from Earth”) should return “htraE morf sgniteerG”.


function reverseString(str){
    var reversed = str.split("").reverse().join("");
    return reversed
}


console.log(reverseString("Greetings from Earth"));