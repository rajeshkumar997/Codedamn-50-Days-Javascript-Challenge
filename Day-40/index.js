const needsLicense = (kind) => {
	// code here
	return kind === 'car' || kind === 'truck';
}

const chooseVehicle = (option1, option2) => {
	// code here
	return `${option1 < option2 ? option1 : option2} is clearly the better choice.`;
}

const calculateResellPrice = (originalPrice, age) => {
	// code here
    let resellPrice;
    if (age < 3) {
        resellPrice = originalPrice * 0.8;
    } else if (age <= 10) {
        resellPrice = originalPrice * 0.7;
    } else {
        resellPrice = originalPrice * 0.5;
    }
    return resellPrice;
}
