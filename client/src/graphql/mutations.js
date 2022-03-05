import { gql } from '@apollo/client'

export const CREATE_BOOKING = gql`
  mutation createBooking(
    $name: String!
    $email: String!
    $address: String!
    $city: String!
    $state: String!
    $zip: String!
    $bookingType: String!
    $bookingDate: String!
    $bookingTime: String!
  ) {
    createBooking(
      name: $name
      email: $email
      address: $address
      city: $city
      state: $state
      zip: $zip
      bookingType: $bookingType
      bookingDate: $bookingDate
      bookingTime: $bookingTime
    ) {
      name
      email
      address
      city
      state
      zip
      date
      bookingDate
      bookingTime
      bookingDateAndTime
      cursor
    }
  }
`
