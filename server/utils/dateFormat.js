const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

// manipulate booking date data into proper format
const dateFormatter = (booking) => {
  const bookingDateArr = booking.dataValues.bookingDate.split('-')
  const bookingTimeArr = booking.dataValues.bookingTime.split(':')

  const month =
    monthNames[
      bookingDateArr[1] === '00' ? +bookingDateArr[1] : +bookingDateArr[1] - 1
    ]
  const day = +bookingDateArr[2]

  const hour = +bookingTimeArr[0]
  const minute = +bookingTimeArr[1]
  let timeValue

  if (hour > 0 && hour <= 12) {
    timeValue = '' + hour
  } else if (hour > 12) {
    timeValue = '' + (hour - 12)
  } else if (hour == 0) {
    timeValue = '12'
  }

  timeValue += minute < 10 ? ':0' + minute : ':' + minute
  timeValue += hour >= 12 ? ' pm' : ' am'

  const bookingDateAndTime = `${month} ${day}, ${bookingDateArr[0]} at ${timeValue}`
  return bookingDateAndTime
}

module.exports = dateFormatter
