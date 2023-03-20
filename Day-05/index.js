const str = 'XeroX';

function getTheGapX(str) {
    // write your solution here
    const fIndex = str.indexOf('X');
    const lIndex = str.lastIndexOf('X');
    if(fIndex === -1 && lIndex === -1){
        return -1;
    }
    else {
        return lIndex - fIndex;
    }
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
