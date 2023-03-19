const time = '12:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here
    const [hour, minuteAndPeriod] = time.split(":");
    const minute = minuteAndPeriod.substring(0, 2);
    const period = minuteAndPeriod.substring(2);
    let hour24 = parseInt(hour);

    if (period === "PM" && hour24 !== 12) {
        hour24 += 12;
    } else if (period === "AM" && hour24 === 12) {
        hour24 = 0;
    }

    return `${hour24.toString().padStart(2, "0")}:${minute}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
