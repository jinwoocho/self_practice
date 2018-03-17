
// <Goals and rules>
// Return true if the given string is a palindrome. Otherwise return false.
// Palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// <Given code>
// function palindrome(str) {
//   return true;
// }
// palindrome(‘eye’);

// <Testing>
// palindrome(“eye”) should return true.
// palindrome(“_eye”) should return true.
// palindrome(“race car”) should return true.
// palindrome(“A man, a plan, a canal. Panama”)should return true.
// palindrome(“never odd or even”) should return true.
// palindrome(“almostomla”) should return false.
// palindrome(“My age is 0, 0 si ega ym.“)should return true.
// palindrome(“1 eye for of 1 eye.“) should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.
// palindrome(“five|\_/|four”) should return false.


//var special = '_','/',


///basic check only. need to do others.
function palindrome(str){
    var newstr = str.split("").reverse().join('');
    if( str === newstr){
        return true;
    } else {
        return false;
    }
}



palindrome('race car');

/////
//11_14 works but.... the code is stupid
function palindrome(str){
    str = str.toLowerCase();
    str = str.replace(/\s/g,'');
    str = str.split('_').join('');
    str = str.split(',').join('');
    str = str.split('.').join('');
    str = str.split('/').join('');
    str = str.split('-').join('');
    str = str.split(')').join('');
    str = str.split('(').join('');
    console.log(str);
    var newstr = str.split("").reverse().join('');

    if( str === newstr){
        return true;
    } else {
        return false;
    }
}

palindrome('race car');