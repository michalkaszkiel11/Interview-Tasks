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
// function calculateMedian(arr) {
//     const sortedArray = arr.sort((a, b) => a - b);
//     const mid = Math.floor(arr.length / 2);
//     if (sortedArray.length % 2 === 0) {
//         return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
//     } else {
//         return sortedArray[mid];
//     }
// }

// console.log(calculateMedian([20.555, 10, 2]));
// // 20.555 [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19, 210.22]
// //10.2 [10.2, 11.5, 2.5]
// function get_median_of_first_week_expenses(expenses) {
//     let medians = [];

//     // Styczeń - tylko dzień "01"
//     if (expenses["2023-01"] && expenses["2023-01"]["01"]) {
//         let januaryExpenses = [];
//         Object.values(expenses["2023-01"]["01"]).forEach((expenseArray) => {
//             januaryExpenses = januaryExpenses.concat(expenseArray);
//         });
//         medians.push(calculateMedian(januaryExpenses));
//     }

//     // Marzec - tylko dzień "04"
//     if (expenses["2023-03"] && expenses["2023-03"]["04"]) {
//         let marchExpenses = [];
//         Object.values(expenses["2023-03"]["04"]).forEach((expenseArray) => {
//             marchExpenses = marchExpenses.concat(expenseArray);
//         });
//         medians.push(calculateMedian(marchExpenses));
//     }

//     return medians;
// }
// const medians = get_median_of_first_week_expenses(expenses);
// console.log("Mediana dla stycznia:", medians[0]);
// console.log("Mediana dla marca:", medians[1]);

//10.2 , 15.3775
function get_median_of_first_week_expenses(expenses) {
    const calculateMedian = (arr) => {
        const sortedArray = arr.sort((a, b) => a - b);
        const mid = Math.floor(sortedArray.length / 2);
        if (sortedArray.length % 2 === 0) {
            return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
        } else {
            return sortedArray[mid];
        }
    };
    function getFirstSunday(year, monthIndex) {
        const firstDayOfMonth = new Date(year, monthIndex, 1);
        return ((7 - firstDayOfMonth.getDay()) % 7) + 1;
    }
    let medians = [];

    for (const month in expenses) {
        const yearMonth = month.split("-");
        const year = parseInt(yearMonth[0]);
        const monthIndex = parseInt(yearMonth[1]) - 1; // Indeks miesiąca zaczyna się od 0
        const firstSunday = getFirstSunday(year, monthIndex);

        let firstWeekExpenses = [];

        // Iteracja przez dni danego miesiąca
        for (let day = 1; day <= firstSunday; day++) {
            const dayKey = day < 10 ? `0${day}` : `${day}`;
            if (expenses[month][dayKey]) {
                Object.values(expenses[month][dayKey]).forEach(
                    (expenseArray) => {
                        firstWeekExpenses =
                            firstWeekExpenses.concat(expenseArray);
                    }
                );
            }
        }

        // Obliczenie mediany dla wydatków do pierwszej niedzieli miesiąca
        const median = calculateMedian(firstWeekExpenses);
        medians.push(median);
    }

    return medians;
}
const medians = get_median_of_first_week_expenses(expenses);
console.log(medians);
