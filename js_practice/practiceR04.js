//<Goals and rules>
//    Return the length of the longest word in the provided sentence.
//    Your response should be a number.
//
//    <Given code>
//        function findLongestWord(str) {
//        return str.length;
//    }
//        findLongestWord(“The quick brown fox jumped over the lazy dog”);
//
//        <Testing>
//            findLongestWord(“The quick brown fox jumped over the lazy dog”) should return a number.
//            findLongestWord(“The quick brown fox jumped over the lazy dog”) should return 6.
//            findLongestWord(“May the force be with you”) should return 5.
//            findLongestWord(“Google do a barrel roll”) should return 6.

var arr = [];
var Max_num;
function findLongestWord(str) {
    var splitstr = str.split(" ");
    // console.log(splitstr);
    for(var i = 0; i < splitstr.length; i++){
        // console.log(splitstr[i].length);
        arr.push(splitstr[i].length);
        Max_num = Math.max.apply(Math, arr);
    }
    // console.log(arr);
    // console.log(Max_num);
    // return str.length;
    return Max_num;
}
findLongestWord("The quick brown fox jumped over the lazy dog");