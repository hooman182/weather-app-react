const date = new Date()
const time = date.toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' })
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "Saturday"]

function getDayName() {
    return days[date.getDay()]
}

function dayNameByDate(value) {
    const date = new Date(value)
    return days[date.getDay()]
}

export {getDayName, dayNameByDate, time}