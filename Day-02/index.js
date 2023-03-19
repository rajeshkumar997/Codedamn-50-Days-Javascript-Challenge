const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here

    // return str.split("").reverse().join("");

            //OR

    var newstr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newstr += str[i];
    }
    return newstr;
}

console.log(`Reversed string is: ${reverseAString(str)}`)
