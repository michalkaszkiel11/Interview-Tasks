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

    // Funkcja obliczająca medianę
    function calculateMedian(arr) {
        arr.sort((a, b) => a - b);
        const mid = Math.floor(arr.length / 2);
        if (arr.length % 2 === 0) {
            return (arr[mid - 1] + arr[mid]) / 2;
        } else {
            return arr[mid];
        }
    }

    // Funkcja zwracająca numer pierwszej niedzieli w danym miesiącu
    function getFirstSunday(year, monthIndex) {
        const firstDayOfMonth = new Date(year, monthIndex, 1);
        return ((7 - firstDayOfMonth.getDay()) % 7) + 1;
    }
    let allExpenses = [];
    // Iteracja po miesiącach w wydatkach
    for (const month in expenses) {
        const yearMonth = month.split("-");
        const year = parseInt(yearMonth[0]);
        const monthIndex = parseInt(yearMonth[1]) - 1;
        const firstSunday = getFirstSunday(year, monthIndex);

        // Iteracja po dniach danego miesiąca
        for (let day = 1; day <= firstSunday; day++) {
            const dayKey = day < 10 ? `0${day}` : `${day}`;
            // Sprawdzenie, czy bieżący dzień mieści się w pierwszym tygodniu (do niedzieli)
            if (expenses[month][dayKey]) {
                // Iteracja po kategoriach wydatków w danym dniu
                Object.values(expenses[month][dayKey]).forEach(
                    (expenseArray) => {
                        // Dodanie wydatków z każdej kategorii
                        allExpenses = allExpenses.concat(expenseArray);
                    }
                );
            }
        }
    }
    result = calculateMedian(allExpenses);
    return result;
}

console.log(get_median_of_first_week_expenses(expenses));
