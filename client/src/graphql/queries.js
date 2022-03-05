import { gql } from '@apollo/client'

export const GET_BOOOKINGS = gql`
  query getBookings {
    getBookings {
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
`
