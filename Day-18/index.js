const totalGrains = () => {
	// Code here
    let totalGrainOnBoard = BigInt(0);
    for(let i=1; i<=64; i++){
        totalGrainOnBoard += grainsOn(i);
    }

	return totalGrainOnBoard;
}

const grainsOn = (input) => {
	// Code here
    // formula 2^(n-1) to calculate the number of grains on the nth square

	return BigInt(Math.pow(2, input-1));
}

console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains upto 5th square: ${totalGrains(5)}`)
