const input = [
    {
        "HRVDate": "2024-04-18",
        "SleepOnset": "2024-04-17T15:31:01.000Z",
        "WakeUpTime": "2024-04-17T22:21:02.000Z",
        "Awake": "28",
        "Light": "47",
        "Deep": "25"
    },
    {
        "HRVDate": "2024-05-28",
        "SleepOnset": "2024-05-27T15:34:04.000Z",
        "WakeUpTime": "2024-05-27T23:30:01.000Z",
        "Awake": "24",
        "Light": "49",
        "Deep": "28"
    },
    {
        "HRVDate": "2024-06-14",
        "SleepOnset": "2024-06-13T17:12:01.000Z",
        "WakeUpTime": "2024-06-13T23:43:03.000Z",
        "Awake": "20",
        "Light": "53",
        "Deep": "27"
    },
    {
        "HRVDate": "2024-04-04",
        "SleepOnset": "2024-04-03T14:16:01.000Z",
        "WakeUpTime": "2024-04-03T22:10:00.000Z",
        "Awake": "25",
        "Light": "44",
        "Deep": "31"
    }
];

// Helper function to format date parts
const getFormattedDateParts = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate());
    return { year, month, day };
};

// Transform the input to the desired output format
const transformData = (data) => {
    const output = {};

    data.forEach(item => {
        const { year, month, day } = getFormattedDateParts(item.HRVDate);

        if (!output[year]) {
            output[year] = {};
        }

        if (!output[year][month]) {
            output[year][month] = {};
        }

        output[year][month][day] = item;
    });

    return output;
};

// Sort the transformed data
const sortData = (data) => {
    const sortedData = {};

    // Sort by year in descending order
    const sortedYears = Object.keys(data).sort((a, b) => b - a);

    sortedYears.forEach(year => {
        sortedData[year] = {};

        // Sort by month in descending order
        const sortedMonths = Object.keys(data[year]).sort((a, b) => b - a);
        
        sortedMonths.forEach(month => {
            sortedData[year][month] = {};

            // Sort days in ascending order (convert day keys to numbers for sorting)
            const sortedDays = Object.keys(data[year][month]).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

            sortedDays.forEach(day => {
                sortedData[year][month][day] = data[year][month][day];
            });
        });
    });

    return sortedData;
};


function monthDivider(jsonData){
    // Transform and sort the input data
    if(jsonData == null){
        return
    }

    const transformedData = transformData(jsonData);
    const sortedData = sortData(transformedData);

    return sortedData;
}

export {monthDivider}