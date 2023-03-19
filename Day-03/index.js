const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here

    // return parseFloat(num.toString().split('').reverse().join(''))*Math.sign(num);

                // OR  //
  
    let str = num.toString();
    let rev = str.split('').reverse().join('');
    return Number(rev);
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
