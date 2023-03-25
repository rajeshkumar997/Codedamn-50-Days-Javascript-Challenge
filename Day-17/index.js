/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray) => {
	// Your code here
    let set = new Set(inputArray);
    let longestSub = 0;
    for(let num of set){
        if(!set.has(num-1)){
            let currentSub = 1;
            while(set.has(num+currentSub)){
                currentSub++;
            }
            longestSub = Math.max(longestSub, currentSub);
        }
    }
	return longestSub;
}
