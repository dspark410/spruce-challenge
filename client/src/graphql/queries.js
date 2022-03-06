import { gql } from '@apollo/client'

export const GET_BOOOKINGS = gql`
  query getBookings($after: String) {
    getBookings(after: $after) {
      cursor
      hasMore
      bookings {
        id
        name
        email
        address
        city
        state
        zip
        date
        bookingType
        bookingDate
        bookingTime
        bookingDateAndTime
        cursor
      }
    }
  }
`
