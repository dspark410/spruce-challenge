import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_BOOOKINGS } from '../../graphql/queries'
import BookingModal from '../BookingModal/BookingModal'
import {
  BookingsContainer,
  BookingsHeaderContainer,
  BookingsHeader,
  BookingsLabelsContainer,
  BookingLabel,
  DataContainer,
  BookingDataContainer,
  BookingData,
  CreateBookingButton,
} from './Styles'

function Bookings() {
  const [openModal, setOpenModal] = useState(false)

  const closeModal = () => setOpenModal(false)

  const { loading, data, error } = useQuery(GET_BOOOKINGS)

  //console.log(data)

  useEffect(() => {
    if (error) {
      console.log(error)
      alert('fetch booking error')
    }
  }, [error])

  if (loading) {
    return <div>...loading</div>
  }

  return (
    <BookingsContainer>
      <BookingsHeaderContainer>
        <BookingsHeader>Bookings</BookingsHeader>
        <CreateBookingButton onClick={() => setOpenModal(true)}>
          Create booking
        </CreateBookingButton>
      </BookingsHeaderContainer>
      <BookingsLabelsContainer>
        <BookingLabel>Customer</BookingLabel>
        <BookingLabel>Email</BookingLabel>
        <BookingLabel>Address</BookingLabel>
        <BookingLabel>Booking Type</BookingLabel>
        <BookingLabel>Booking Date/Time</BookingLabel>
      </BookingsLabelsContainer>

      <DataContainer>
        {data.getBookings
          ? data.getBookings
              .slice()
              .sort((a, b) => a.date - b.date)
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
                    <BookingData>{booking.bookingDateAndTime}</BookingData>
                  </BookingDataContainer>
                )
              })
          : null}
      </DataContainer>

      {openModal ? (
        <BookingModal closeModal={closeModal} openModal={openModal} />
      ) : null}
    </BookingsContainer>
  )
}

export default Bookings
