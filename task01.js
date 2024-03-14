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
    // Obliczanie mediany
    function calculateMedian(arr) {
        arr.sort((a, b) => a - b);
        const mid = Math.floor(arr.length / 2);
        if (arr.length % 2 === 0) {
            return (arr[mid - 1] + arr[mid]) / 2;
        } else {
            return arr[mid];
        }
    }

    const medians = [];

    // Iteracja po miesiącach w wydatkach
    for (const month in expenses) {
        const firstWeekExpenses = [];
        const days = Object.keys(expenses[month]);

        // Iteracja po dniach każdego miesiąca
        for (const day of days) {
            const dailyExpenses = expenses[month][day];

            // Połączenie wydatków różnych kategorii za pomocą flat() oraz przerwanie przy niedzieli
            firstWeekExpenses.push(...Object.values(dailyExpenses).flat());
            if (new Date(`${month}-${day}`).getDay() === 0) {
                break;
            }
        }
        // Obliczenie mediany dla wydatków do pierwszej niedzieli miesiąca
        const median = calculateMedian(firstWeekExpenses);
        medians.push(median);
    }

    // Obliczenie mediany z median
    result = calculateMedian(medians);
    return result;
}

console.log(get_median_of_first_week_expenses(expenses));
