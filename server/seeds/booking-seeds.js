const Booking = require('../models/Booking')
const { faker } = require('@faker-js/faker')

const bookingTypes = ['House Keeping', 'Dog Walk']

const bookings = []

// create fake data from faker.js
for (let i = 0; i < 100; i++) {
  const booking = {}

  const month = new Date(faker.date.future()).getMonth().toString()
  const year = new Date(faker.date.future()).getFullYear().toString()
  const day = new Date(faker.date.future()).getDate().toString()
  const adjustedMonth = month.length < 2 ? `0${month}` : month
  const adjustedDay = day.length < 2 ? `0${day}` : day
  const hour = new Date(faker.date.future()).getHours().toString()
  const minute = new Date(faker.date.future()).getMinutes().toString()
  const adjustedHour = hour.length < 2 ? `0${hour}` : hour
  const adjustedMinute = minute.length < 2 ? `0${minute}` : minute

  booking.name = faker['name'].findName()
  booking.email = faker.internet.email()
  booking.address = faker['address'].streetAddress()
  booking.city = faker['address'].city()
  booking.state = faker['address'].stateAbbr()
  booking.zip = faker['address'].zipCode()
  booking.bookingType =
    bookingTypes[Math.floor(Math.random() * bookingTypes.length)]
  booking.bookingDate = `${year}-${adjustedMonth}-${adjustedDay}`
  booking.bookingTime = `${adjustedHour}:${adjustedMinute}`
  booking.cursor = faker.datatype.uuid()
  bookings.push(booking)
}

//console.log(bookings)

// seeding fxn
const seedBookings = () => Booking.bulkCreate(bookings)

module.exports = seedBookings
