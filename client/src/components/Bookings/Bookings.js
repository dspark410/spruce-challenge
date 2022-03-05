import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_BOOOKINGS } from '../../graphql/queries'
import BookingModal from '../BookingModal/BookingModal'
import {
  BookingsContainer,
  BookingsHeaderContainer,
  BookingsHeader,
  FilterBookingCreateBookingContainer,
  FilterBookingsSpan,
  Select,
  BookingsLabelsContainer,
  BookingLabel,
  BookingDateTimeLabel,
  DataContainer,
  CreateBookingButton,
} from './Styles'
import AllBookings from '../AllBookings/AllBookings'
import DogBookings from '../DogBookings/DogBookings'
import HouseBookings from '../HouseBookings/HouseBookings'
import Loader from '../Loader/Loader'

function Bookings() {
  const [openModal, setOpenModal] = useState(false)
  const [bookings, setBookings] = useState({
    allBookings: true,
    dogWalkBookings: false,
    houseKeepingBookings: false,
  })

  const { loading, data, error } = useQuery(GET_BOOOKINGS)

  // close create booking modal
  const closeModal = () => setOpenModal(false)

  // filter booking types on select
  const handleChange = (e) => {
    const bookingObj = {
      ...bookings,
      allBookings: false,
      dogWalkBookings: false,
      houseKeepingBookings: false,
      [e.target.value]: true,
    }

    setBookings(bookingObj)
  }

  // show alert error if there is an error on fetching data
  useEffect(() => {
    if (error) {
      console.log(error)
      alert('fetch booking error')
    }
  }, [error])

  // show spinning loader while waiting for data
  if (loading) {
    return <Loader />
  }

  return (
    <BookingsContainer>
      <BookingsHeaderContainer>
        <BookingsHeader>Bookings</BookingsHeader>
        <FilterBookingCreateBookingContainer>
          <div>
            <FilterBookingsSpan>Filter Bookings:</FilterBookingsSpan>
            <Select onChange={handleChange}>
              <option value='allBookings'>All</option>
              <option value='dogWalkBookings'>Dog Walks</option>
              <option value='houseKeepingBookings'>House Keeping</option>
            </Select>
          </div>

          <CreateBookingButton onClick={() => setOpenModal(true)}>
            Create booking
          </CreateBookingButton>
        </FilterBookingCreateBookingContainer>
      </BookingsHeaderContainer>

      <BookingsLabelsContainer>
        <BookingLabel>Customer</BookingLabel>
        <BookingLabel>Email</BookingLabel>
        <BookingLabel>Address</BookingLabel>
        <BookingLabel>Booking Type</BookingLabel>
        <BookingDateTimeLabel>Booking Date/Time</BookingDateTimeLabel>
      </BookingsLabelsContainer>

      <DataContainer>
        <AllBookings data={data} bookings={bookings} />

        <DogBookings data={data} bookings={bookings} />

        <HouseBookings data={data} bookings={bookings} />
      </DataContainer>

      {openModal ? (
        <BookingModal closeModal={closeModal} openModal={openModal} />
      ) : null}
    </BookingsContainer>
  )
}

export default Bookings
