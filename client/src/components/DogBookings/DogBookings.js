import React from 'react'
import {
  BookingDataContainer,
  BookingData,
  BookingDateTimeData,
} from './Styles'

function DogBookings({ data, bookings }) {
  return !bookings.allBookings &&
    bookings.dogWalkBookings &&
    !bookings.houseKeepingBookings
    ? data.getBookings
        .slice()
        .sort((a, b) => a.date - b.date)
        .filter((b) => b.bookingType === 'Dog Walk')
        .map((booking) => {
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

export default DogBookings
