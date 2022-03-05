//create unix time from booking date data to allow sorting by date and time
const unixDateFormatter = (booking) => {
  let bookingDateArr = booking.dataValues.bookingDate.split('-')
  const index = bookingDateArr.indexOf('00')
  if (index !== -1) bookingDateArr.splice(1, index, '01')
  const bookingDate = bookingDateArr.join('-')

  const date = new Date(`${bookingDate} ${booking.bookingTime}`)
  return date
}

module.exports = unixDateFormatter
