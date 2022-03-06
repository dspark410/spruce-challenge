import React from 'react'
import {
  BookingDataContainer,
  BookingData,
  BookingDateTimeData,
} from './Styles'

function AllBookings({ data, bookings }) {
  return data.getBookings.bookings &&
    bookings.allBookings &&
    !bookings.dogWalkBookings &&
    !bookings.houseKeepingBookings
    ? data.getBookings.bookings.map((booking) => {
        return (
          <BookingDataContainer key={booking.id}>
            <BookingData>{booking.name}</BookingData>
            <BookingData>{booking.email}</BookingData>

            <BookingData>
              <div>{booking.address}</div>
              <span>{booking.city},</span> <span>{booking.state},</span>{' '}
              <span>{booking.zip}</span>
            </BookingData>
            <BookingData>{booking.bookingType}</BookingData>
            <BookingDateTimeData>
              {booking.bookingDateAndTime}
            </BookingDateTimeData>
          </BookingDataContainer>
        )
      })
    : null
}

export default AllBookings
