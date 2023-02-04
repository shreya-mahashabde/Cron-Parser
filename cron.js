let string = ''

let allMinute = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60'
let allHour = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24'
let allDays = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31'
let allMonth = "1 2 3 4 5 6 7 8 9 10 11 12"
let allWeekDays = "0 1 2 3 4 5 6"

let maxMinute = 60
let maxHour = 12
let maxDays = 31
let maxMonth = 12
let maxWeekDays = 6


function onSubmit(e) {
    string = document.getElementById("cronString").value

    let cronArray = string?.split(' ')

    let minute = cronArray[0]
    let hour = cronArray[1]
    let dayofmonth = cronArray[2]
    let month = cronArray[3]
    let dayofweek = cronArray[4]
    let command = cronArray[5]

    let doneMinute = mimnuteFunction(true, minute)
    let doneHour = mimnuteFunction(false, hour)
    let doneDayOfMonth = dayOfMonthFunction(dayofmonth)
    let doneMonth = monthFunction(month)
    let doneDayOfWeek = weekDaysFunction(dayofweek)
    let doneCommand = command ? command : ''

    document.getElementById("input").innerText = string
    document.getElementById("minute").innerText = doneMinute
    document.getElementById("hour").innerText = doneHour
    document.getElementById("dayOfMonth").innerText = doneDayOfMonth
    document.getElementById("month").innerText = doneMonth
    document.getElementById("dayOfWeek").innerText = doneDayOfWeek
    document.getElementById("command").innerText = doneCommand
}

function weekDaysFunction(dayofweek) {
    let showDayOfMonth = ''
    if (dayofweek) {
        if (dayofweek === '*') {
            showDayOfMonth = allWeekDays
        } else if ((dayofweek[0] === '*' || dayofweek[0] === '?') && dayofweek[1] === '/') {
            let fixed = maxWeekDays
            let interval = dayofweek.substr(2)
            let maxValue = dayofweek.substr(2)
            showDayOfMonth = `0 ${maxValue} `
            do {
                maxValue = Number(maxValue) + Number(interval)
                showDayOfMonth = showDayOfMonth + maxValue + ' '
            }
            while ((Number(maxValue) + Number(interval)) <= fixed);

        } else if (dayofweek.includes('/')) {
            let fixed = maxWeekDays
            let dayRange = dayofweek.split('/')
            let maxValue = dayRange[0]
            let interval = dayRange[1]
            showDayOfMonth = `${maxValue} `
            do {
                maxValue = Number(maxValue) + Number(interval)
                showDayOfMonth = showDayOfMonth + maxValue + ' '
            }
            while ((Number(maxValue) + Number(interval)) <= fixed);
        } else if (dayofweek.includes('-')) {

            let arrayOfMin = dayofweek.split('-')
            let temp = Math.abs(Number(arrayOfMin[1]) - Number(arrayOfMin[0])) + 2
            let check = false
            let value = arrayOfMin[0]
            // if (arrayOfMin[0] > 0 && arrayOfMin[1] < maxWeekDays) {
            for (let i = 0; i < temp; i++) {
                console.log('i: ', i);
                if (value > 6) {
                    value = 0
                }
                console.log('value: ', value);
                showDayOfMonth = showDayOfMonth + value + ' '
                value++;
            }
            console.log('showDayOfMonth: ', showDayOfMonth);
            // }
        } else if (dayofweek.includes(',')) {
            let arrayOfMin = dayofweek.split(',')
            for (let i = 0; i < arrayOfMin.length; i++) {
                showDayOfMonth = showDayOfMonth + arrayOfMin[i] + ' '
            }
        }
    }

    return showDayOfMonth
}


function monthFunction(month) {
    let showDayOfMonth = ''
    if (month) {
        if (month === '*') {
            showDayOfMonth = allMonth
        } else if ((month[0] === '*' || month[0] === '?') && month[1] === '/') {
            let fixed = maxMonth
            let interval = month.substr(2)
            let maxValue = month.substr(2)
            showDayOfMonth = `0 ${maxValue} `
            do {
                maxValue = Number(maxValue) + Number(interval)
                showDayOfMonth = showDayOfMonth + maxValue + ' '
            }
            while ((Number(maxValue) + Number(interval)) <= fixed);

        } else if (month.includes('/')) {
            let fixed = maxMonth
            let dayRange = month.split('/')
            let maxValue = dayRange[0]
            let interval = dayRange[1]
            showDayOfMonth = `${maxValue} `
            do {
                maxValue = Number(maxValue) + Number(interval)
                showDayOfMonth = showDayOfMonth + maxValue + ' '
            }
            while ((Number(maxValue) + Number(interval)) <= fixed);
        } else if (month.includes('-')) {
            let arrayOfMin = month.split('-')
            if (arrayOfMin[0] > 0 && arrayOfMin[1] < maxMonth) {
                for (let i = Number(arrayOfMin[0]); i <= Number(arrayOfMin[1]); i++) {
                    showDayOfMonth = showDayOfMonth + i + ' '
                }
            }
        } else if (month.includes(',')) {
            let arrayOfMin = month.split(',')
            for (let i = 0; i < arrayOfMin.length; i++) {
                showDayOfMonth = showDayOfMonth + arrayOfMin[i] + ' '
            }
        }
    }

    return showDayOfMonth
}


function dayOfMonthFunction(dayOfMonth) {
    let showDayOfMonth = ''
    if (dayOfMonth) {
        if (dayOfMonth === '*') {
            showDayOfMonth = allDays
        } else if ((dayOfMonth[0] === '*' || dayOfMonth[0] === '?') && dayOfMonth[1] === '/') {
            let fixed = maxDays
            let interval = dayOfMonth.substr(2)
            let maxValue = dayOfMonth.substr(2)
            showDayOfMonth = `0 ${maxValue} `
            do {
                maxValue = Number(maxValue) + Number(interval)
                showDayOfMonth = showDayOfMonth + maxValue + ' '
            }
            while ((Number(maxValue) + Number(interval)) <= fixed);

        } else if (dayOfMonth.includes('/')) {
            let fixed = maxDays
            let dayRange = dayOfMonth.split('/')
            let maxValue = dayRange[0]
            let interval = dayRange[1]
            showDayOfMonth = `${maxValue} `
            do {
                maxValue = Number(maxValue) + Number(interval)
                showDayOfMonth = showDayOfMonth + maxValue + ' '
            }
            while ((Number(maxValue) + Number(interval)) <= fixed);
        } else if (dayOfMonth.includes('-')) {
            let arrayOfMin = dayOfMonth.split('-')
            if (arrayOfMin[0] > 0 && arrayOfMin[1] < 31) {
                for (let i = Number(arrayOfMin[0]); i <= Number(arrayOfMin[1]); i++) {
                    showDayOfMonth = showDayOfMonth + i + ' '
                }
            }
        } else if (dayOfMonth.includes(',')) {
            let arrayOfMin = dayOfMonth.split(',')
            for (let i = 0; i < arrayOfMin.length; i++) {
                showDayOfMonth = showDayOfMonth + arrayOfMin[i] + ' '
            }
        }
    }

    return showDayOfMonth
}


function mimnuteFunction(isminute, minute_Hour) {
    let showMinute = ''
    if (minute_Hour) {
        if (minute_Hour === '*') {
            showMinute = isminute ? allMinute : allHour
        } else if (minute_Hour === '0') {
            showMinute = '0'
        } else if ((minute_Hour[0] === '*' || minute_Hour[0] === '0') && minute_Hour[1] === '/') {
            let fixed = isminute ? maxMinute : maxHour
            let interval = minute_Hour.substr(2)
            let maxValue = minute_Hour.substr(2)
            showMinute = `0 ${interval} `
            do {
                maxValue = Number(maxValue) + Number(interval)
                showMinute = showMinute + maxValue + ' '
            }
            while ((Number(maxValue) + Number(interval)) <= fixed);

        } else if (minute_Hour.includes('/')) {
            let fixed = maxDays
            let timeRange = minute_Hour.split('/')
            let maxValue = timeRange[0]
            let interval = timeRange[1]
            showMinute = `${maxValue} `
            do {
                maxValue = Number(maxValue) + Number(interval)
                showMinute = showMinute + maxValue + ' '
            }
            while ((Number(maxValue) + Number(interval)) <= fixed);
        } else if (minute_Hour.includes('-')) {
            let arrayOfMin = minute_Hour.split('-')
            for (let i = Number(arrayOfMin[0]); i <= Number(arrayOfMin[1]); i++) {
                showMinute = showMinute + i + ' '
            }
        } else if (minute_Hour.includes(',')) {
            let arrayOfMin = minute_Hour.split(',')
            for (let i = 0; i < arrayOfMin.length; i++) {
                showMinute = showMinute + arrayOfMin[i] + ' '
            }
        }
    }
    return showMinute
}











