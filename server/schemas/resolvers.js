const Booking = require('../models/Booking')
const dateFormatter = require('../utils/dateFormat')
const unixDateFormatter = require('../utils/unixDate')
const paginateResults = require('../utils/pagination')

const resolvers = {
  Query: {
    getBookings: async (parent, { pageSize = 20, after }) => {
      try {
        const bookings = await Booking.findAll({
          order: [
            ['bookingDate', 'ASC'],
            ['bookingTime', 'ASC'],
          ],
        })

        //console.log(bookings)

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

        const paginatedBookings = paginateResults({
          after,
          pageSize,
          results: flattenedBookings,
        })

        return {
          bookings: paginatedBookings,
          cursor: paginatedBookings.length
            ? paginatedBookings[paginatedBookings.length - 1].cursor
            : null,
          hasMore: paginatedBookings.length
            ? paginatedBookings[paginatedBookings.length - 1].cursor !==
              flattenedBookings[flattenedBookings.length - 1].cursor
            : false,
        }
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
          cursor: booking.dataValues.cursor,
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
module.exports = { resolvers }
