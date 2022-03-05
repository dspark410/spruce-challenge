const Booking = require('../models/Booking')
const dateFormatter = require('../utils/dateFormat')
const unixDateFormatter = require('../utils/unixDate')

const resolvers = {
  Query: {
    getBookings: async () => {
      try {
        const bookings = await Booking.findAll()

        const flattenedBookings = bookings.map((booking) => {
          return {
            id: booking.dataValues.id,
            name: booking.dataValues.name,
            email: booking.dataValues.email,
            address: booking.dataValues.address,
            city: booking.dataValues.city,
            state: booking.dataValues.state,
            zip: booking.dataValues.zip,
            date: unixDateFormatter(booking),
            bookingType: booking.dataValues.bookingType,
            bookingDate: booking.dataValues.bookingDate,
            bookingTime: booking.dataValues.bookingTime,
            bookingDateAndTime: dateFormatter(booking),
            cursor: booking.dataValues.cursor,
          }
        })

        return flattenedBookings
      } catch (error) {
        console.log(error)
      }
    },
  },

  Mutation: {
    createBooking: async (
      parent,
      {
        name,
        email,
        address,
        city,
        state,
        zip,
        bookingType,
        bookingDate,
        bookingTime,
      }
    ) => {
      try {
        const booking = await Booking.create({
          name,
          email,
          address,
          city,
          state,
          zip,
          bookingType,
          bookingDate,
          bookingTime,
        })

        //console.log(booking)

        return {
          id: booking.dataValues.id,
          name: booking.dataValues.name,
          email: booking.dataValues.email,
          address: booking.dataValues.address,
          city: booking.dataValues.city,
          state: booking.dataValues.state,
          zip: booking.dataValues.zip,
          date: unixDateFormatter(booking),
          bookingType: booking.dataValues.bookingType,
          bookingDate: booking.dataValues.bookingDate,
          bookingTime: booking.dataValues.bookingTime,
          bookingDateAndTime: dateFormatter(booking),
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
module.exports = { resolvers }
