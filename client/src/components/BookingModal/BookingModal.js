import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { GET_BOOOKINGS } from '../../graphql/queries'
import { CREATE_BOOKING } from '../../graphql/mutations'
import {
  BackDrop,
  ModalContainer,
  BookingHeaderCloseButtonContainer,
  CreateBookingHeader,
  CloseModalButton,
  FormContainer,
  NameEmailAddressContainer,
  BookingTypeDateTimeContainer,
  InputContainer,
  StateZipInputContainer,
  InputLabel,
  TextInput,
  StateZipInput,
  InputSelect,
  CreateBookingButton,
} from './Styles'
import Loader from '../Loader/Loader'

function BookingModal({ closeModal }) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    bookingType: '',
    bookingDate: '',
    bookingTime: '',
  })

  const [createBooking, { loading, error }] = useMutation(CREATE_BOOKING, {
    refetchQueries: [GET_BOOOKINGS],
  })

  // handle form values and put into state
  const handleChange = (e) => {
    const copiedValues = { ...formValues }
    copiedValues[e.target.name] = e.target.value
    setFormValues(copiedValues)
  }

  // create a new booking
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // destructure formValues obj
      const {
        name,
        email,
        address,
        city,
        state,
        zip,
        bookingType,
        bookingDate,
        bookingTime,
      } = formValues

      // if any fields are empty show alert otherwise create a booking
      if (
        name !== '' &&
        email !== '' &&
        address !== '' &&
        city !== '' &&
        state !== '' &&
        zip !== '' &&
        bookingType !== '' &&
        bookingDate !== '' &&
        bookingTime !== ''
      ) {
        const { data } = await createBooking({
          variables: { ...formValues },
        })
        console.log(data)
        closeModal()
      } else {
        alert('Please fill in all fields')
      }
    } catch (err) {
      console.log(err)
    }
  }

  // show alert error if there is an error on fetching data
  useEffect(() => {
    if (error) {
      console.log(error)
      alert('create booking error')
    }
  }, [error])

  // show spinning loader while waiting for data
  if (loading) {
    return <Loader />
  }

  return (
    <BackDrop>
      <ModalContainer>
        <BookingHeaderCloseButtonContainer>
          <CreateBookingHeader>Create booking</CreateBookingHeader>
          <CloseModalButton onClick={closeModal}>X</CloseModalButton>
        </BookingHeaderCloseButtonContainer>

        <FormContainer>
          <NameEmailAddressContainer>
            <InputContainer>
              <InputLabel htmlFor='name'>Name</InputLabel>
              <TextInput
                type='text'
                name='name'
                value={formValues['name']}
                onChange={handleChange}
              />
            </InputContainer>

            <InputContainer>
              <InputLabel htmlFor='email'>Email</InputLabel>
              <TextInput
                type='text'
                name='email'
                value={formValues['email']}
                onChange={handleChange}
              />
            </InputContainer>

            <InputContainer>
              <InputLabel htmlFor='address'>Street Address</InputLabel>
              <TextInput
                type='text'
                name='address'
                value={formValues['address']}
                onChange={handleChange}
              />
            </InputContainer>

            <InputContainer>
              <InputLabel htmlFor='city'>City</InputLabel>
              <TextInput
                type='text'
                name='city'
                value={formValues['city']}
                onChange={handleChange}
              />
            </InputContainer>

            <StateZipInputContainer>
              <InputContainer>
                <InputLabel htmlFor='state'>State</InputLabel>
                <StateZipInput
                  type='text'
                  name='state'
                  value={formValues['state']}
                  onChange={handleChange}
                />
              </InputContainer>

              <InputContainer>
                <InputLabel htmlFor='zip'>Zip code</InputLabel>
                <StateZipInput
                  type='text'
                  name='zip'
                  value={formValues['zip']}
                  onChange={handleChange}
                />
              </InputContainer>
            </StateZipInputContainer>
          </NameEmailAddressContainer>
          <BookingTypeDateTimeContainer>
            <div>
              <InputContainer>
                <InputLabel htmlFor='text'>Booking type</InputLabel>
                <InputSelect
                  name='bookingType'
                  onChange={handleChange}
                  defaultValue={'-- select an option --'}>
                  <option disabled>-- select an option --</option>
                  <option value='House Keeping'>Housekeeping</option>
                  <option value='Dog Walk'>Dog Walk</option>
                </InputSelect>
              </InputContainer>

              <InputContainer>
                <InputLabel htmlFor='date'>Booking Date</InputLabel>
                <TextInput
                  type='date'
                  name='bookingDate'
                  value={formValues['bookingDate']}
                  onChange={handleChange}
                />
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor='time'>Booking Time</InputLabel>
                <TextInput
                  type='time'
                  name='bookingTime'
                  value={formValues['bookingTime']}
                  onChange={handleChange}
                />
              </InputContainer>
            </div>

            <CreateBookingButton onClick={handleSubmit}>
              Create booking
            </CreateBookingButton>
          </BookingTypeDateTimeContainer>
        </FormContainer>
      </ModalContainer>
    </BackDrop>
  )
}

export default BookingModal
