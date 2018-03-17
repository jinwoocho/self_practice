//<Goals and rules>
//    Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
//    <Given code>
//        function titleCase(str) {
//        return str;
//     }
//         titleCase(“I’m a little tea pot”);
//
//        <Testing>
//             titleCase(“I’m a little tea pot”)should return a string.
//             titleCase(“I’m a little tea pot”)should return “I’m A Little Tea Pot”.
//             titleCase(“sHoRt AnD sToUt”) should return “Short And Stout”.
//             titleCase(“HERE IS MY HANDLE HERE IS MY SPOUT”) should return “Here Is My Handle Here Is My Spout”.

function titleCase(str){
    lowstr = str.toLowerCase();
    // console.log(lowstr);
    var splitstr = lowstr.split(' ');
    // console.log(splitstr);
    for(var i = 0 ; i < splitstr.length; i ++){
        var upperfirst = splitstr[i][0].toUpperCase();
        var rest = splitstr[i].slice(1);
        // console.log(upperfirst);
        // console.log(rest);
        splitstr[i] = upperfirst + rest;
        // console.log(splitstr);
        str = splitstr.join(' ');
    }
    return str;
}
titleCase("sHoRt AnD sToUt");