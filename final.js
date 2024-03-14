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

function get_median_of_first_week_expenses(expenses) {
    let result;
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
        const monthIndex = parseInt(yearMonth[1]) - 1;
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
        const median =
            firstWeekExpenses.length > 0
                ? calculateMedian(firstWeekExpenses)
                : undefined;
        if (median !== undefined) {
            medians.push(median);
        }
    }
    result = calculateMedian(medians);
    return result;
}
const medians = get_median_of_first_week_expenses(expenses);
console.log(medians);
