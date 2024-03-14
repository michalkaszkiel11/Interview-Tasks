expenses = {
    "2023-01": {
        "01": {
            food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
            fuel: [210.22],
        },
        "09": {
            food: [11.9],
            fuel: [190.22],
        },
    },
    "2023-03": {
        "07": {
            food: [20, 11.9, 30.2, 11.9],
        },
        "04": {
            food: [10.2, 11.5, 2.5],
            fuel: [],
        },
    },
    "2023-04": {},
};
function sortArr(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    return sortedArray;
}
// console.log(sortArr([22.11, 43, 11.72, 2.2, 36.29, 2.5, 19, 210.22]));
const testitem = sortArr([22.11, 43, 11.72, 2.2, 36.29, 2.5, 19, 210.22]);
const testitem2 = sortArr([10.2, 11.5, 2.5]);
const calculateMedian = (sortedArray) => {
    const mid = Math.floor(sortedArray.length / 2);
    if (sortedArray.length % 2 === 0) {
        return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    } else {
        return sortedArray[mid];
    }
};
console.log(calculateMedian(testitem));
console.log(calculateMedian(testitem2));
