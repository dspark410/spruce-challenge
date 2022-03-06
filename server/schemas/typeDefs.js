const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Booking {
    id: Int
    name: String
    email: String
    address: String
    city: String
    state: String
    zip: String
    date: String
    bookingType: String
    bookingDate: String
    bookingTime: String
    bookingDateAndTime: String
    cursor: String
  }

  type BookingConnection {
    cursor: String
    hasMore: Boolean
    bookings: [Booking]
  }

  type Query {
    getBookings(pageSize: Int, after: String): BookingConnection
  }

  type Mutation {
    createBooking(
      name: String!
      email: String!
      address: String!
      city: String!
      state: String!
      zip: String!
      bookingType: String!
      bookingDate: String!
      bookingTime: String!
    ): Booking
  }
`
module.exports = { typeDefs }
